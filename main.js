console.log('JS connected');
// fill in psuedo code

// nav buttons
function navBtn(){
  $('.navbtn').on('click', function(event){
    if ((event) === 1) {
       $('.bio');
    }
    else{
      if ((event) === 2){
        return $('.js-projects');
      }
      else{
        if ((event) === 3){
          return $('.contact');
        }
        else{
          if ((event) === 4){
            return $('.triangle');
          }
        }
      }
    }
  });
}

// test of git
function projects(){
  $(img).on('click', function(){
    
  });
}
