import React, { useState, useEffect, useRef } from "react";
import "../ChatbotPopup.css"; // Make sure to create this CSS file for styles
import { IoIosChatbubbles } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

// Helper function to convert markdown-style links to HTML <a> tags
const formatAnswer = (answer) => {
  let formattedAnswer = answer.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Make specific text bold (e.g., "buraya klikləyin")
  formattedAnswer = formattedAnswer.replace(
    /buraya klikləyin/g,
    "<strong>buraya klikləyin</strong>"
  );

  return formattedAnswer;
};

// Arrays for Azerbaijani, English, and Russian languages
const chatbotDataAze = [
  {
    question: "Müqaviləmi necə yoxlaya bilərəm?",
    answer:
      "Müqavilə detallarınızı və ödəniş tarixçənizi şəxsi kabinetinizə daxil olaraq görə bilərsiniz. Panelə daxil olmaq üçün [buraya klikləyin](https://dostfinans.az/panel).",
    keywords: [
      "müqavilə",
      "yoxlamaq",
      "detallar",
      "ödəniş",
      "müqaviləmi",
      "necə",
      "yoxlaya",
      "bilərəm",
      "muqavile",
    ],
  },
  {
    question: "Faktorinq xidmətinizdən necə istifadə edə bilərəm?",
    answer:
      "Faktorinq xidmətindən istifadə etmək üçün bizimlə əlaqə saxlayın və ya [saytımızda faktorinq kalkulyatorunu](https://dostfinans.az/faktorinq) istifadə edərək ilkin hesablamalar aparın.",
    keywords: ["faktorinq", "xidmət", "istifadə", "kalkulyator"],
  },
  {
    question: "Müştəri panelimə necə daxil ola bilərəm?",
    answer:
      "Müştəri panelinizə daxil olmaq üçün [bu linkə](https://dostfinans.az/panel) klikləyin. Hesabınıza daxil olmaq üçün istifadəçi adı və şifrə tələb olunur.",
    keywords: ["panel", "giriş", "daxil olmaq", "şifrə", "istifadəçi adı"],
  },
];

const chatbotDataEng = [
  {
    question: "How can I check my contract?",
    answer:
      "You can view your contract details and payment history by logging into your personal account. Click [here](https://dostfinans.az/panel) to access it.",
    keywords: ["contract", "check", "details", "payment"],
  },
  {
    question: "How can I use your factoring service?",
    answer:
      "To use factoring services, contact us or use the [factoring calculator](https://dostfinans.az/faktorinq) on our website to make initial calculations.",
    keywords: ["factoring", "service", "use"],
  },
  {
    question: "How can I access my client panel?",
    answer:
      "Click [here](https://dostfinans.az/panel) to access your client panel. You will need your username and password to log in.",
    keywords: ["panel", "access", "log in"],
  },
];

const chatbotDataRus = [
  {
    question: "Как я могу проверить мой контракт?",
    answer:
      "Вы можете просмотреть детали контракта и историю платежей, войдя в ваш личный кабинет. Для доступа к панели нажмите [здесь](https://dostfinans.az/panel).",
    keywords: ["контракт", "проверить", "детали", "платежи"],
  },
  {
    question: "Как я могу воспользоваться вашим факторингом?",
    answer:
      "Для использования услуг факторинга свяжитесь с нами или используйте [калькулятор факторинга](https://dostfinans.az/faktorinq) на нашем сайте для предварительных расчетов.",
    keywords: ["факторинг", "услуга", "использовать"],
  },
  {
    question: "Как я могу войти в мой клиентский кабинет?",
    answer:
      "Нажмите [здесь](https://dostfinans.az/panel) для доступа к панели клиента. Для входа вам понадобятся имя пользователя и пароль.",
    keywords: ["панель", "войти", "доступ"],
  },
];

// Function to get a bot response based on user input and language
const getBotResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  const language = localStorage.getItem("language") || "aze"; // Default to Azerbaijani

  const exactMatchAze = chatbotDataAze.find(
    (entry) => entry.question.toLowerCase() === lowerMessage
  );
  if (exactMatchAze) {
    return formatAnswer(exactMatchAze.answer);
  }

  const exactMatchEng = chatbotDataEng.find(
    (entry) => entry.question.toLowerCase() === lowerMessage
  );
  if (exactMatchEng) {
    return formatAnswer(exactMatchEng.answer);
  }

  const exactMatchRus = chatbotDataRus.find(
    (entry) => entry.question.toLowerCase() === lowerMessage
  );
  if (exactMatchRus) {
    return formatAnswer(exactMatchRus.answer);
  }

  // Check if message contains part of the question or keywords
  const partialMatchAze = chatbotDataAze.find((entry) =>
    entry.question.toLowerCase().includes(lowerMessage)
  );
  if (partialMatchAze) {
    return formatAnswer(partialMatchAze.answer);
  }

  const partialMatchEng = chatbotDataEng.find((entry) =>
    entry.question.toLowerCase().includes(lowerMessage)
  );
  if (partialMatchEng) {
    return formatAnswer(partialMatchEng.answer);
  }

  const partialMatchRus = chatbotDataRus.find((entry) =>
    entry.question.toLowerCase().includes(lowerMessage)
  );
  if (partialMatchRus) {
    return formatAnswer(partialMatchRus.answer);
  }

  const keywordMatchAze = chatbotDataAze.find((entry) =>
    entry.keywords.some((keyword) => lowerMessage.includes(keyword))
  );
  if (keywordMatchAze) {
    return formatAnswer(keywordMatchAze.answer);
  }

  const keywordMatchEng = chatbotDataEng.find((entry) =>
    entry.keywords.some((keyword) => lowerMessage.includes(keyword))
  );
  if (keywordMatchEng) {
    return formatAnswer(keywordMatchEng.answer);
  }

  const keywordMatchRus = chatbotDataRus.find((entry) =>
    entry.keywords.some((keyword) => lowerMessage.includes(keyword))
  );
  if (keywordMatchRus) {
    return formatAnswer(keywordMatchRus.answer);
  }

  return getFallbackMessage(language);
};

// Function to get fallback message based on language
const getFallbackMessage = (language) => {
  switch (language) {
    case "en":
      return "Sorry, we couldn't understand your question. Please try asking something else.";
    case "ru":
      return "Извините, мы не поняли ваш вопрос. Пожалуйста, задайте другой вопрос.";
    case "az":
    default:
      return "Üzr istəyirik, sualınızı başa düşmədik. Zəhmət olmasa, başqa bir sual verin.";
  }
};

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(false); // State to control visibility of the chatbot

  const chatEndRef = useRef(null); // Reference to the last message

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSendMessage = () => {
    const userMessage = userInput.trim();
    if (userMessage) {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { user: true, message: userMessage },
        { user: false, message: getBotResponse(userMessage) },
      ]);
      setUserInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll to the last message whenever chat history changes
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const language = localStorage.getItem("language") || "aze"; // Default to Azerbaijani
  const getHeaderText = () => {
    switch (language) {
      case "en":
        return "Chat with us!";
      case "ru":
        return "Напишите нам!";
      case "az":
      default:
        return "Bizə yazın";
    }
  };

  const toggleChat = () => {
    setIsChatVisible((prev) => !prev);
  };

  return (
    <div className="chatbotContainer">
      {/* Chatbot Popup Button */}
      <button className="chat-toggle-button" onClick={toggleChat}>
        <IoIosChatbubbles />
      </button>

      {/* Chatbot Popup Container */}
      {isChatVisible && (
        <div className="chatbot-container">
          <div className="chat-header">
            <p className="content text-center ">
              {getHeaderText() || "Bizə yazın "}
            </p>

            <IoCloseSharp className="close-btn" onClick={toggleChat} />
          </div>
          <div className="chat-history">
            {chatHistory.map((entry, index) => (
              <div
                key={index}
                className={`message ${entry.user ? "user" : "bot"}`}
                dangerouslySetInnerHTML={{
                  __html: entry.message,
                }}
              />
            ))}
            <div ref={chatEndRef} /> {/* Reference to the last message */}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              onKeyDown={handleKeyDown} // Add the keydown event
              placeholder={
                language === "en"
                  ? "Ask your question..."
                  : language === "ru"
                  ? "Задайте ваш вопрос..."
                  : "Sualınızı yazın..."
              }
            />

            <IoIosSend onClick={handleSendMessage} className="chatSendBtn" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
