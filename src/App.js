import './App.css';
import mainPhoto from './images/mainPhoto.jpeg'
import money from './images/money.jpeg'

import {Component} from './components/Component'

const data = {
  author: {
    name: "Yulia Yarem",
    photo: { mainPhoto },
    nickname: "@YuYa"
  },
  content: "Does money decide everything? How about humanity?",
  image: { money },
  date: "03/08/2023"
}

function App() {
  return (
    <div className="App">
      <Component author={data.author}
        content={data.content}
        image={data.image}
        date={data.date}
      />
    </div>
  );
}

export default App;
