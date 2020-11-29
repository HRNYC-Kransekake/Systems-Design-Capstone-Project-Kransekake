import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import AddModal from "./AddModal";
import "../Q&A/qaStyle.scss";
import '../../styles/main.scss';
import { useTracking } from 'react-tracking';
import moment from 'moment';

const Helpful = (props) => {
  const [isReported, setReported] = useState(false);
  const [isHelpful, setHelpful] = useState(false);
  const isMounted = useRef(true);
  const { Track, trackEvent } = useTracking({ module: 'HELPFUL' });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const report = useCallback(() => {
    trackEvent({time: moment().format(), type: 'REPORT'});
    if (isReported) {
      return;
    }
    setReported(true);
    axios
      .put(`http://3.21.164.220/qa/answers/${props.a_id}/reportt`)
      //remove t to make work
      .then(() => {
        if (isMounted.current) {
          setReported(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isReported]);

  const helpful = useCallback(() => {
    
    
    if (isHelpful) return;
    setHelpful(true);
    if (props.reportOrAdd === "Report") {
      //mark answer helpful
      trackEvent({time: moment().format(), type: 'A_HELPFUL'});
      axios
        .put(`http://3.21.164.220/qa/answers/${props.a_id}/helpful`, {
          params: { answer_id: props.a_id },
        })
        .then(() => {
          console.log('helpful answer meow');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //mark question helpful
      trackEvent({time: moment().format(), type: 'Q_HELPFUL'});
      axios
        .put(`http://3.21.164.220/qa/questions/${props.question.question_id}/helpful`, {
          params: { question_id: props.question.question_id },
        })
        .then(() => {
          console.log('helpful question meow')
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(window.dataLayer);
  }, [isHelpful]);

  if (props.reportOrAdd !== "Report") {
    return (
      <Track>
      <span style={{ fontWeight: "normal", fontSize: "16px" }}>
        Helpful?
        <button
          disabled={isHelpful}
          onClick={helpful}
          className="helpful-button"
        >
          Yes
        </button>
        <span>({isHelpful ? props.helped + 1: props.helped}) | </span>
        <AddModal
          name={props.reportOrAdd}
          bType={"1"}
          title={"Submit Your Answer"}
          prodName={props.product}
          submit={props.submit}
          qid={props.question.question_id}
          question={props.question.question_body}
        />
      </span>
      </Track>
    );
  } else {
    return (
      <Track>
      <span>
        Helpful?
        <button
          disabled={isHelpful}
          onClick={helpful}
          className="helpful-button"
        >
          Yes
        </button>
        <span>({isHelpful ? props.helped + 1: props.helped}) | </span>
        <button
          disabled={isReported}
          onClick={report}
          className="helpful-button"
        >
          {isReported ? "REPORTED" : props.reportOrAdd}
        </button>
      </span>
      </Track>
    );
  }
};

export default Helpful;
