let counter = 0;
         function updateCounter() {
          document.getElementById('counter-value').textContent = counter ;
          document.querySelector('#reset');

        }
         function add() {
          counter++
          updateCounter();
         }
         function subtract() {
          counter--
         updateCounter();
         }

         function reset() {
            counter = 0;

           updateCounter();
           }