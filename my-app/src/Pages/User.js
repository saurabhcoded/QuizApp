import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Userprofile from "../components/Userprofile";

const User = () => {
  const Navigate = useNavigate();
  const [check, setCheck] = useState(false);
  let [profile, setProfile] = useState({});
  const [QuizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  let id = useParams();
  useEffect(() => {
    if (!localStorage.getItem("profile")) {
      console.log("plz register yourself");
      Navigate("/login");
    } else {
      axios.get(`http://localhost:5000/user${id.id}`).then((res) => {
        setProfile(res.data.result);
        console.log(res);
        setQuizData(res.data.data);
        if (res.data) {
          setCheck(true);
        }
        return QuizData;
      });
    }
  }, [Navigate]);

  const checkAns = function (ans) {
    if (ans) {
      console.log("this is correct");
      setScore(score + 1);
      console.log(score);
    } else {
      console.log("wrong ans");
    }
  };
  if (check) {
    return (
      <div>
        <Userprofile
          name={profile.name}
          email={profile.email}
          created={profile.created_on}
        />
       <h5>{score}</h5>
        <div>
          {QuizData.map((ele) => {
            return (
              <div className="border p-3 m-auto" style={{maxWidth:"400px"}} key={ele.id}>
                <p className="fw-semibold">{ele.QUESTIONS}</p>
                <div>
                  <button
                    className="btn btn-outline-secondary rounded-0 mb-1 d-block w-100"
                    onClick={() => checkAns(ele.CORRECT_ANSWER.ANS1)}
                  >
                    {ele.ANSWERS.ANS1}
                  </button>
                  <button
                    className="btn btn-outline-secondary rounded-0 mb-1 d-block w-100"
                    onClick={() => checkAns(ele.CORRECT_ANSWER.ANS2)}
                  >
                    {ele.ANSWERS.ANS2}
                  </button>
                  <button
                    className="btn btn-outline-secondary rounded-0 mb-1 d-block w-100"
                    onClick={() => checkAns(ele.CORRECT_ANSWER.ANS3)}
                  >
                    {ele.ANSWERS.ANS3}
                  </button>
                  <button
                    className="btn btn-outline-secondary rounded-0 mb-1 d-block w-100"
                    onClick={() => checkAns(ele.CORRECT_ANSWER.ANS4)}
                  >
                    {ele.ANSWERS.ANS4}
                  </button>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-warning">PREVIOUS</button>
                  <button className="btn btn-primary">SAVE & NEXT</button>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading.....</div>;
  }
};
export default User;
