import { useState } from 'react'
import './App.css'

import vid1 from './assets/vid1.mp4'
import vid2 from './assets/vid2.mp4'
import vid3 from './assets/vid3.mp4'
import vid4 from './assets/vid4.mp4'

const VIDEOS = [vid1,vid2,vid3,vid4]

function Slider({videos}) {
	//Idk if this should be a const...?
	const [slideIndex, setSlideIndex] = useState(0)

	function nextSlide() {
		if(slideIndex == (videos.length-1)) {
			setSlideIndex(0);
		} else {
			setSlideIndex(slideIndex+1);
		}
		console.log(slideIndex);
	}	
	return (
		<>
			<div className='slider'>
				<video className='slide' key={slideIndex} autoPlay loop muted disablepictureinpicture onClick={nextSlide}>
					<source src={videos[slideIndex]} type='video/mp4' />
				</video>
			</div>
		</>
	)
}
/* NOTES:
 * We possibly want the site to only show vertical videos on a vertical device and then horizontal on a horizontal device and perhaps switch between them and crop etc...
 */

function Menubar() {
	const [content, setContent] = useState("Menu Bar");
	function testChange() {
		setContent("Clicked Menu Bar");
	}
	return (
			<div className='menubar' onClick={testChange}>{content}</div>
	)
}
function App() {
	return (
		<>
			
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<Menubar />
			<Slider videos={VIDEOS} />
		</>
	)
}

export default App
