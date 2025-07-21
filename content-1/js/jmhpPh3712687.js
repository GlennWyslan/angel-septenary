
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
              const clickeventList = [{"compKey":"1ad706d","misc":{"type":"button"}},{"compKey":"b1db19d","misc":{"type":"button"}},{"compKey":"a294063","misc":{"type":"button"}},{"compKey":"c91632b","misc":{"type":"button"}},{"compKey":"d379084","misc":{"type":"button"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();