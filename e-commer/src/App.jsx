import "./App.css";

import { ToastContainer, toast } from "react-toastify"; // React-Toastify importu
import "react-toastify/dist/ReactToastify.css"; // Stil dosyasını import et

import { Home, Heart } from "lucide-react"; // Lucide'den 'Home' simgesini import et

import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/actions/counterActions";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomePage from "./components/homePage";
import About from "./components/about";
import Contact from "./components/contact";

import { useEffect, useState } from "react";
import { getData, postData } from "./api/api.js"; // Axios fonksiyonlarını import et

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Başarılı işlem!", {
      position: "top-right", // Bildirimin nerede görüneceğini belirleyebilirsiniz
      autoClose: 5000, // 5 saniye sonra kapanmasını sağlar
    });
  };

  const [data, setData] = useState(null);
  const [postDataResponse, setPostDataResponse] = useState(null);

  // Sayfa yüklendiğinde veriyi çek
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(); // getData fonksiyonunu kullanarak veri çek
        setData(result);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  // Veriyi post etme fonksiyonu
  const handlePostData = async () => {
    try {
      const response = await postData({ name: "Test", age: 25 }); // postData fonksiyonunu kullanarak veri gönder
      setPostDataResponse(response);
    } catch (error) {
      console.error("Veri gönderme hatası:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center text-center">
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>

      <div className="flex justify-center items-center">
        <Home size={40} color="blue" />
        <Heart size={40} color="red" />
      </div>

      <button onClick={notify}>Bildirim Göster</button>
      {/* ToastContainer bileşeni, bildirimlerin gösterileceği alanı sağlar */}
      <ToastContainer />

      {/* Tailwind CSS ile styling */}
      <div className="my-36 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Welcome to Tailwind CSS!
          </h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click Me
          </button>
        </div>
      </div>

      <div className="bg-primary text-secondary">Özelleştirilmiş renkler</div>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route render={() => <h2>404 - Page Not Found</h2>} />
          </Switch>
        </div>
      </Router>

      <div>
        <h1>API`den Gelen Veriler:</h1>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Yükleniyor...</p>
        )}

        <button onClick={handlePostData}>Veri Gönder</button>
        {postDataResponse && (
          <p>Gönderilen veri: {JSON.stringify(postDataResponse)}</p>
        )}
      </div>
    </div>
  );
}

export default App;
