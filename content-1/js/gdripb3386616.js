
    (function() {
      try {
        const accordionTitles = document.querySelectorAll(".a-ac-t");
        accordionTitles.forEach((title, index) => {
          title.addEventListener("click", () => {
            title.classList.toggle("a-ac-t-active");
            const accordionContent = title.nextElementSibling;
            const toggleSymbol = title.querySelector(".a-ac-tg");
            title.childNodes[1].childNodes[0].classList.toggle('atomicat-hidden');
            title.childNodes[1].childNodes[1].classList.toggle('atomicat-hidden');
            accordionContent.classList.toggle("a-c-inactive");
            accordionContent.nextElementSibling.classList.toggle("atomicat-hidden");
          });
        });
      } catch (error) {
        return error;
      }
    })();(function() {
          try {
              const clickeventList = [{"compKey":"7f8679a","misc":{"type":"button"}},{"compKey":"2d2fae8","misc":{"type":"button"}},{"compKey":"9323e66","misc":{"type":"button"}},{"compKey":"d764a43","misc":{"type":"button"}},{"compKey":"c890105","misc":{"type":"button"}},{"compKey":"7947974","misc":{"type":"text"}},{"compKey":"ade23f0","misc":{"type":"text"}},{"compKey":"a108081","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();