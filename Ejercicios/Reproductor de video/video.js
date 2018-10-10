class Video {
	constructor(selector){
		this.selector = selector;
		this.playerElement = document.querySelector(selector)
		this.videoElement = document.querySelector(selector + 'video')

		this.bindEvents();
	}
	bindEvents(){
		this.playPauseBtn = document.querySelector(this.selector + '.play-pause')
		this.showVolumeBtn = document.querySelector(this.selector+ '.show-volume')
		this.volumeRange = document.querySelector(this.selector + '#volume-range')
		this.progressBar = document.querySelector(this.selector+ '.bar')
		this.fullScreenBtn = document.querySelector(this.selector+ '.set-full-screen')
		this.showSpeedBtn = document.querySelector(this.selector+ '.show-speed')
		this.playBackRateBtns = document.querySelectorAll(this.selector + '.playBackRate')
		this.progressContainerBar = document.querySelector(this.selector+'.progress')

		this.playPauseBtn.addEventListener('click', () => this.playPause())
		this.showVolumeBtn.addEventListener('click', () => this.toggleVolume())
		this.showSpeedBtn.addEventListener('click', () => this.toggleSpeed())
		this.volumeRange.addEventListener('input', () => this.updateVolume())
		this.videoElement.addEventListener('timeupdate', () => this.updateProgress())
		this.videoElement.addEventListener('durationChange',() => this.setFullDuration())
		this.fullScreenBtn.addEventListener('click', () => this.setFullScreen())
		this.progressContainerBar.addEventListener('click',()=> this.setDuration(ev))

		this.playBackRateBtns.forEach((el)=>{
			el.addEventListener('click', () => this.setPlayBackRate(el))
		})
	}

	setDuration(ev){
		let el = ev.currentTarget;
		let positions = getRelativeCoordinates(ev,el)
		let fullWidth = el.offsetWidth;
		let porcentage = positions.x / fullWidth;
		let time = this.videoElement.duration * porcentage

		this.videoElement.currentTime = time;
	}

	setPlayBackate(el){
		let speed = parseFloat(el.dataset.value);

		this.videoElement.playBackRate = speed;
		this.toggleSpeed()

	}

	setFullScreen(){
		let fullScreenFunction = this.videoElement.requestFullscreen ||
								 this.videoElement.webkitRequestFullScreen ||
								 this.videoElement.mozRequestFullScreen ||
								 this.videoElement.mozRequestFullScreen;
		fullScreenFunction.call(this.videoElement)
	}	

	playPause(){
		/* Lo importante son los metodos pause y play
		los inner html son iconos que sirven mientras sean
		de la fuente de material design.
		*/
		if (this.videoElement.paused) {
			this.videoElement.play();
			this.playPauseBtn.innerHTML = 'pause';
		}else {
			this.videoElement.pause();
			this.playPauseBtn.innerHTML = 'play_arrow'
		}
	}

	toggleVolume(){
		document.querySelector(this.selector + '.volume').classList.toggle('active')
	}
	toggleSpeed(){
		document.querySelector(this.selector + '.speed').classList.toggle('active')
	}
	updateVolume(){
		if (this.volumeRange.value === 0) {
			// cambiar icono a muted
		}
		this.videoElement.volume = this.volumeRange.value;
	}

	updateProgress(){
		let currentTime = this.videoElement.currentTime,
			fullTime = this.videoElement.duration,
			percentage = Math.floor((currentTime * 100) / fullTime );
		this.setTime(currentTime,'.current-duration')
		this.progressBar.style.width = percentage+'%'
	}

	setFullDuration(){
		this.setTime(this.videoElement.duration, '.full-duration');
	}

	setTime(duration,selector){
		let	minutes = parseInt(duration / 60, 10 ),
			seconds = parseInt(duration % 60);

		if (minutes < 10) {
			minutes = '0'+ minutes;
		}
		if (seconds < 10){
			seconds = '0'+ seconds
		}
		document.querySelector(this.selector + '' + selector)
			.innerHTML = minutes + ':' + seconds
	}
}

function getRelativeCoordinates(e, container){
	let pos = {}, offset = {}, ref;

	ref = container.offsetParent;
	pos.x = !! e.touches ? e.touches[ 0 ].pageX : e.pageX;
	pos.y = !! e.touches ? e.touches[ 0 ].pageY : e.pageY;

	offset.left = container.offsetLeft;
	offset.top = container.offsetTop;

	while(ref){
		offset.left += ref.offsetLeft;
		offset.top += ref.offsetTop;

		ref = ref.offsetParent;
	}
	
	return {
		x : pos.x - offset.left,
		y : pos.y - offset.top,
	};
}

let video = new Video('.video-player')