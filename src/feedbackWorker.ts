/* eslint-disable no-restricted-globals */
import axios from "axios";
self.onmessage = async (event) => {
    if (event.data === 'fetch') {
      const response = await axios.get('https://feedback-061n.onrender.com/feedback');
      postMessage({ type: 'feedbacks', feedbacks: response.data });
    }
  };
  