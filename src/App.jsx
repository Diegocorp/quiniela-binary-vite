import React, { useState } from "react";
import "./App.css";
import { oneSingleArray } from "./algorithms/FisherYates.js";

const App = () => {
  const [game1, setGame1] = useState([]);
  const [game2, setGame2] = useState([]);
  const [game3, setGame3] = useState([]);
  const [game4, setGame4] = useState([]);
  const [game5, setGame5] = useState([]);
  const [game6, setGame6] = useState([]);
  const [game7, setGame7] = useState([]);
  const [game8, setGame8] = useState([]);
  const [game9, setGame9] = useState([]);
  const [game10, setGame10] = useState([]);
  const [game11, setGame11] = useState([]);
  const [game12, setGame12] = useState([]);
  const [game13, setGame13] = useState([]);
  const [game14, setGame14] = useState([]);

  const calculate = () => {
    const array1 = oneSingleArray(
      document.getElementById("l1").value,
      document.getElementById("v1").value
    );
    setGame1(array1);

    const array2 = oneSingleArray(
      document.getElementById("l2").value,
      document.getElementById("v2").value
    );
    setGame2(array2);

    const array3 = oneSingleArray(
      document.getElementById("l3").value,
      document.getElementById("v3").value
    );
    setGame3(array3);

    const array4 = oneSingleArray(
      document.getElementById("l4").value,
      document.getElementById("v4").value
    );
    setGame4(array4);

    const array5 = oneSingleArray(
      document.getElementById("l5").value,
      document.getElementById("v5").value
    );
    setGame5(array5);

    const array6 = oneSingleArray(
      document.getElementById("l6").value,
      document.getElementById("v6").value
    );
    setGame6(array6);

    const array7 = oneSingleArray(
      document.getElementById("l7").value,
      document.getElementById("v7").value
    );
    setGame7(array7);

    const array8 = oneSingleArray(
      document.getElementById("l8").value,
      document.getElementById("v8").value
    );
    setGame8(array8);

    const array9 = oneSingleArray(
      document.getElementById("l9").value,
      document.getElementById("v9").value
    );
    setGame9(array9);

    const array10 = oneSingleArray(
      document.getElementById("l10").value,
      document.getElementById("v10").value
    );
    setGame10(array10);

    const array11 = oneSingleArray(
      document.getElementById("l11").value,
      document.getElementById("v11").value
    );
    setGame11(array11);

    const array12 = oneSingleArray(
      document.getElementById("l12").value,
      document.getElementById("v12").value
    );
    setGame12(array12);

    const array13 = oneSingleArray(
      document.getElementById("l13").value,
      document.getElementById("v13").value
    );
    setGame13(array13);

    const array14 = oneSingleArray(
      document.getElementById("l14").value,
      document.getElementById("v14").value
    );
    setGame14(array14);
  };

  const resetData = () => {
    setGame1([]);
    setGame2([]);
    setGame3([]);
    setGame4([]);
    setGame5([]);
    setGame6([]);
    setGame7([]);
    setGame8([]);
    setGame9([]);
    setGame10([]);
    setGame11([]);
    setGame12([]);
    setGame13([]);
    setGame14([]);

    document.getElementById("l1").value = null;
    document.getElementById("v1").value = null;
    document.getElementById("l2").value = null;
    document.getElementById("v2").value = null;
    document.getElementById("l3").value = null;
    document.getElementById("v3").value = null;
    document.getElementById("l4").value = null;
    document.getElementById("v4").value = null;
    document.getElementById("l5").value = null;
    document.getElementById("v5").value = null;
    document.getElementById("l6").value = null;
    document.getElementById("v6").value = null;
    document.getElementById("l7").value = null;
    document.getElementById("v7").value = null;
    document.getElementById("l8").value = null;
    document.getElementById("v8").value = null;
    document.getElementById("l9").value = null;
    document.getElementById("v9").value = null;
    document.getElementById("l10").value = null;
    document.getElementById("v10").value = null;
    document.getElementById("l11").value = null;
    document.getElementById("v11").value = null;
    document.getElementById("l12").value = null;
    document.getElementById("v12").value = null;
    document.getElementById("l13").value = null;
    document.getElementById("v13").value = null;
    document.getElementById("l14").value = null;
    document.getElementById("v14").value = null;
  };

  return (
    <div>
      <div id="table-container">
        <table className="table table-hover">
          <thead className="table-active">
            <tr>
              <th scope="col">GAMES</th>
              <th scope="col">LOCAL</th>
              <th scope="col">VISITOR</th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">5</th>
              <th scope="col">6</th>
              <th scope="col">7</th>
              <th scope="col">8</th>
              <th scope="col">9</th>
              <th scope="col">10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Game 1</th>
              <td>
                <input type="text" id="l1" />
              </td>
              <td>
                <input type="text" id="v1" />
              </td>
              {game1.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 2</th>
              <td>
                <input type="text" id="l2" />
              </td>
              <td>
                <input type="text" id="v2" />
              </td>
              {game2.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 3</th>
              <td>
                <input type="text" id="l3" />
              </td>
              <td>
                <input type="text" id="v3" />
              </td>
              {game3.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 4</th>
              <td>
                <input type="text" id="l4" />
              </td>
              <td>
                <input type="text" id="v4" />
              </td>
              {game4.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 5 </th>
              <td>
                <input type="text" id="l5" />
              </td>
              <td>
                <input type="text" id="v5" />
              </td>
              {game5.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 6</th>
              <td>
                <input type="text" id="l6" />
              </td>
              <td>
                <input type="text" id="v6" />
              </td>
              {game6.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 7</th>
              <td>
                <input type="text" id="l7" />
              </td>
              <td>
                <input type="text" id="v7" />
              </td>
              {game7.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 8</th>
              <td>
                <input type="text" id="l8" />
              </td>
              <td>
                <input type="text" id="v8" />
              </td>
              {game8.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 9</th>
              <td>
                <input type="text" id="l9" />
              </td>
              <td>
                <input type="text" id="v9" />
              </td>
              {game9.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 10</th>
              <td>
                <input type="text" id="l10" />
              </td>
              <td>
                <input type="text" id="v10" />
              </td>
              {game10.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 11</th>
              <td>
                <input type="text" id="l11" />
              </td>
              <td>
                <input type="text" id="v11" />
              </td>
              {game11.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 12</th>
              <td>
                <input type="text" id="l12" />
              </td>
              <td>
                <input type="text" id="v12" />
              </td>
              {game12.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 13</th>
              <td>
                <input type="text" id="l13" />
              </td>
              <td>
                <input type="text" id="v13" />
              </td>
              {game13.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Game 14</th>
              <td>
                <input type="text" id="l14" />
              </td>
              <td>
                <input type="text" id="v14" />
              </td>
              {game14.map((element, index) => (
                <td key={index}>
                  <p>{element}</p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div id="button-container">
        <button onClick={calculate}>CALCULATE</button>
        <button onClick={resetData}>RESET</button>
      </div>
    </div>
  );
};

export default App;
