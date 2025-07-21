(function() {
          try {
              const clickeventList = [{"compKey":"6799008","misc":{"type":"button"}},{"compKey":"92734d8","misc":{"type":"text"}},{"compKey":"341e74a","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();(function() {
          try {
              const animationList = [{"key":"9db54f7","type":"image"},{"key":"6799008","type":"button"}];
    
              animationList.forEach((animationItem, index) => {
                const { key, type } = animationItem;
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('atomicat-entrance-animation-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('atomicat-entrance-animation-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              return error;
          }
      })();