
window.onload = function() {
  const container = document.querySelector('.template-black');
  const svg = document.querySelector('.complete');
  const progressBar = document.querySelector('.progress-bar');
  //const pct = document.querySelector('.pct');
  const totalLength = progressBar.getTotalLength();
  
  //let trd =  Math.round(totalLength);
  
  //console.log("-->" + trd);
  setTopValue(svg);
  progressBar.style.strokeDasharray = totalLength;
  progressBar.style.strokeDashoffset = totalLength;
  
  window.addEventListener('scroll', () => {
    //console.log("-->" + trd);
    setProgress(container, progressBar, totalLength);
  });

  /*
  window.addEventListener('resize', () => {
    setTopValue(svg);
  });*/
  
  //console.log(totalLength + " teste ");
}



window.addEventListener('scroll', function() {
  console.log("aklsklsaas - kksaks");
});


function setTopValue(svg) {
  svg.style.top = document.documentElement.clientHeight * 0.5 - (svg.getBoundingClientRect().height * 0.5) + 'px';
  console.log(svg.style.top);
}

// pct,
function setProgress(container, progressBar, totalLength) {
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  
  const percentage = scrollTop / (scrollHeight - clientHeight);
  console.log(totalLength);
  
  if(percentage === 1) {
    container.classList.add('completed');
  } else {
    container.classList.remove('completed');
  }
  //pct.innerHTML = Math.round(percentage * 100) + '%';
  progressBar.style.strokeDashoffset = totalLength - totalLength * percentage;  
  
  console.log(percentage);
}


function hambuguer() {
    const hambuguer = document.querySelector(".menu-hambuguer");
    const hidden = document.querySelector("body");
    let loadingspinner = document.querySelector('.head');
    //menu
    hambuguer.addEventListener("click", (e) => {
           loadingspinner.classList.toggle('cortina');
           hidden.classList.toggle('hidden');      
  });
}

hambuguer();



// // Circle shaped progress bar
// let div = document.createElement('div');

// let body = document.body,
//     html = document.documentElement;

// let height = Math.max( body.scrollHeight, body.offsetHeight, 
//     html.clientHeight, html.scrollHeight, html.offsetHeight );

// console.log(height);

// document.addEventListener ('scroll' , function (event) {
//   console.log(height);
//   console.log("lksds");
// });

// target.parentNode.insertBefore( div, target );

// let scrollDistance = function (callback, refresh) {
// 	if (!callback || typeof callback !== 'function') return;
// 	var isScrolling, start, end, distance;
//   console.log("zerou1111");
     //3progressBar.style.strokeDashoffset = arredondar + scrollY;
//	window.addEventListener('scroll', function (event) {
	// 	if (!start) {
	// 		start = window.pageYOffset;
  //     console.log("zerou1");
	// 	}
	// 	window.clearTimeout(isScrolling);
	// 	isScrolling = setTimeout(function() {
	// 		end = window.pageYOffset;
	// 		distance = end - start;
	// 		callback(distance, start, end);
	// 		start = null;
	// 		end = null;
	// 		distance = null;
  //     console.log("zerou2");

	// 	}, refresh || 66);

	// }, false);
//};
