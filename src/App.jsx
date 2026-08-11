import React, { useState } from "react";
import Practicals from "./components/Practicals";

import CoverPage from "./pages/CoverPage";
import WelcomePage from "./pages/WelcomePage";
import BirthdayPage from "./pages/BirthdayPage";
import PhotoPage from "./pages/PhotoPage";
import MessagePage from "./pages/MessagePage";
import MemoriesPage from "./pages/MemoriesPage";
import CakePage from "./pages/CakePage";
import FinalPage from "./pages/FinalPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 8;

  const nextPage = () => {
    setCurrentPage((current) =>
      current < totalPages - 1 ? current + 1 : current
    );
  };

  const previousPage = () => {
    setCurrentPage((current) =>
      current > 0 ? current - 1 : current
    );
  };

  const pages = [
    <CoverPage nextPage={nextPage} previousPage={previousPage} />,
    <WelcomePage nextPage={nextPage} previousPage={previousPage} />,
    <BirthdayPage nextPage={nextPage} previousPage={previousPage} />,
    <PhotoPage nextPage={nextPage} previousPage={previousPage} />,
    <MessagePage nextPage={nextPage} previousPage={previousPage} />,
    <MemoriesPage nextPage={nextPage} previousPage={previousPage} />,
    <CakePage nextPage={nextPage} previousPage={previousPage} />,
    <FinalPage nextPage={nextPage} previousPage={previousPage} />,
  ];

  return (
    <main className="app">
      <Practicals
        currentPage={currentPage}
        pages={pages}
      />
    </main>
  );
}

export default App;