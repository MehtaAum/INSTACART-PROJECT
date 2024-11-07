// navbar

    // input
    $(document).ready(function(){
        $('#input').click(function(){       
            $('#hideinput').toggle(100)
            $('.main').toggleClass('low-opacity')
        })
    })
    // input

    // hamburger
    $(document).ready(function(){
        $("#icon").click(function(){
            $(".hamburger").css("left","0%")
            $('.main').toggleClass('low-opacity')
        })
      
        $("#cross").click(function(){
            $(".hamburger").css("left","-100%")
            $('.main').toggleClass('low-opacity')
            $('.first').hide(500)
            $('.two').hide(500)
            $('.three').hide(500)
            
        })
    })
    // hamburger

    // box1 click
    $(document).ready(function(){
        $(".one").click(function(){
            $('.first').toggle(".onebox")
        })
        $(".second").click(function(){
            $('.two').toggle(".onesec")
        })
        $(".third").click(function(){
            $('.three').toggle(".onethird")
        })
    
    })
    // box1 click

    // login
    $(document).ready(function(){
        // opacity problem ask sir about that 
        // opacity problem ask sir about that 
        $("#btn1").click(function(){
            $('.login').toggle(300)
            // $('.main').toggleClass('low-opacity')  
        })
        $(".main").click(function(){
            $('.login').hide(300)
            // $('.main').toggleClass('low-opacity') 
        })
        $("#logincross").click(function(){
            $('.login').hide(300)
            // $('.main').toggleClass('low-opacity')   
        })
    })
    // login

    // signup
    $(document).ready(function(){
        $("#btn2").click(function(){
            $('.signup').toggle(300) 
        })
        $(".main").click(function(){
            $('.signup').hide(300)
        })
        $("#signincross").click(function(){
            $('.signup').hide(300)  
        })
    }) 

    // toggle between signup and login
    $(document).ready(function(){
        $("#gotosign").click(function(){
            $('.signup').show(300) 
        })
        $("#gotologin").click(function(){
            $('.login').show(300) 
            $('.signup').hide(300) 
        })
    })
       // toggle between signup and login
   
    // signup

    // showall & close
    $(document).ready(function(){
        $('.close').hide(300)  
        $('.showless').hide(300)

        $(".showall").click(function(){
            $('.close').toggle(500) 
            // $(".showall").toggleClass("showless") 
            $('.showall').hide(300) 
            $('.showless').show(300) 
        })
  
    })
    $(document).ready(function(){
        $('.close').hide(300) 
        $(".showless").click(function(){
            $('.close').toggle(500) 
            // $(".showless").toggleClass("showall") 
            $('.showall').show(300) 
            $('.showless').hide(300) 
        })
  
    })
    // showall & close
    
// navbar

// main

    // counting effect
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    // IntersectionObserver to trigger the animation when the counter enters the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetValue = parseInt(counter.textContent, 10);
                startInfiniteCount(counter, targetValue);
                observer.unobserve(counter); // stop observing once the counter is animated
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    function startInfiniteCount(counter, target) {
        let count = 0;
        const duration = 35000; // adjust the duration as needed
        const increment = target / (duration / 50);

        const step = () => {
            count = Math.ceil(count + increment);
            counter.textContent = count;

            if (count < target) {
                requestAnimationFrame(step);
            } else {
                counter.textContent = target;
                // Reset the count and restart the animation for an infinite loop
                setTimeout(() => {
                    count = 0; // Reset count to 0
                    requestAnimationFrame(step); // Start again
                }, 1000); // Delay before starting the next loop (1 second)
            }
        };

        requestAnimationFrame(step);
    }
});

    // counting effect

    // common questions
    // $(document).ready(function(){

    //     $(".subcomone").click(function(){
    //         $(".subcomone").slidetoggle("content") 
    //     })
  
    // })
    $(document).ready(function() {
        $(".subcom1").click(function() {
            $(".content").slideToggle(300); // Toggle content for the first question
        });
        $(".subcom2").click(function() {
            $(".sec").slideToggle(300); // Toggle content for the first question
        });
        $(".subcom3").click(function() {
            $(".thre").slideToggle(300); // Toggle content for the first question
        });
        $(".subcom4").click(function() {
            $(".for").slideToggle(300); // Toggle content for the first question
        });
        $(".subcom5").click(function() {
            $(".fives").slideToggle(300); // Toggle content for the first question
        });
        $(".subcom6").click(function() {
            $(".sixes").slideToggle(300); // Toggle content for the first question
        });
       
    
        // Repeat for more questions if needed
    });
    // common questions
// main



// darkmode
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;

toggleSwitch.addEventListener('click', function() {
  if (toggleSwitch.classList.contains('day')) {
    toggleSwitch.classList.remove('day');
    toggleSwitch.classList.add('night');
    body.style.backgroundColor = '#8f8f8f';

  } else {
    toggleSwitch.classList.remove('night');
    toggleSwitch.classList.add('day');
    body.style.backgroundColor = '#f0f8ff';
  }
});

// darkmode

$(document).ready(function(){

    $("#sunset").click(function(){
        $('.day').show(400) 
        $('.day').css("right","10px") 
        $('.day').css("top","600px") 
        
    })

    $("#sunset").dblclick(function(){
        $('.day').hide(600) 
        $('.day').css("right","-100%") 
        $('.day').css("top","700px") 
     
    })

})