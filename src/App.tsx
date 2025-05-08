import { useState, useLayoutEffect, useEffect, useRef, forwardRef  } from 'react'
import './App.css'
import HTMLFlipBook from 'react-pageflip'

// Assets:
import coverImg from './assets/imgs/cover.png'
import isuzu from './assets/imgs/isuzu-hand-crank.png'
import pencilImg from './assets/imgs/pencil.png'
import fp1 from './assets/textures/stains/fingerprint-1.png'
import fp2 from './assets/textures/stains/fingerprint-2.png'
import fp3 from './assets/textures/stains/fingerprint-3.png'
import fps1 from './assets/textures/stains/fingerprint-smudge-1.png'
import fps2 from './assets/textures/stains/fingerprint-smudge-2.png'
import fps3 from './assets/textures/stains/fingerprint-smudge-3.png'
import fps4 from './assets/textures/stains/fingerprint-smudge-4.png'
import oil1 from './assets/textures/stains/oil-1.png'
import tap from './assets/icons/tap-1-svgrepo-com.svg'
import swipe from './assets/icons/swipe-left-svgrepo-com.svg'
import testVid from './assets/vids/test.webm'

const cutoffYear = 1990;

const Page = forwardRef((props, ref) => {
	return (
		<div className="page" ref={ref}>
			<div className="page-content">{props.children}</div>
			<div className="page-footer">{props.number}</div>
		</div>
	);
});

const IndexPage = forwardRef((props, ref) => {
	return (
		<div className="page" ref={ref}>
			<div style={{textAlign: 'center'}}>
			Contact:
			<br></br>
			karbonsclassics@gmail.com
			<br></br>
			(720)-404-0695
			<br></br>
			<br></br>
			Index:
			</div>
			<br></br>
			<div style={{textAlign: 'center', fontStyle: 'italic', fontSize: '80%'}}>
				"Can a few people, earning less than $2 USD per day, without parts or roads, use it continuously for over 40 years?"
				<br></br>
				- Blake, in response to 
				<br></br>
				"What qualifies as a truck?"
			</div>
			{props.children}
		</div>
	);
});

const TitleStains = forwardRef((props, ref) => {
	return (
		<>
			<img className="stain" src={fps3} style={{top: '0%', right: '-30%', opacity: 0.75, width: '70%', transform: 'rotate(110deg)',}}/>
			<img className="stain" src={fps4} style={{bottom: '20%', right: '-40%', opacity: 0.75, width: '60%'}}/>
			<img className="stain" src={fps3} style={{top: '30%', left: '-30%', opacity: 0.75, width: '70%'}}/>
		</>
	);
});

const TitlePage = forwardRef((props, ref) => {
	return (
		<>
			<img src={coverImg} width='100%' style={{top: 0, left: 0,}} height='auto' max-width='100%' max-height='100%' object-fit='contain'/>
			<div className="title-page-cont">
				<div>Classic Mobile Mechanic:</div>
				<div>Probably Move Contact Info Here In the corner or soemthing.</div>
			</div>

		</>
	);
});

const CoverPage = forwardRef((props, ref) => {
	return (
		<>
		<div className="cover-page" ref={ref}>	
			<div className="cover-page-filter"></div>
			{props.children}	
		</div>
		</>
	);
});

function App() {
	function getBookSize() {
		const newState = window.innerWidth < window.innerHeight/.90; // Figure out why this ratio works.
		const scale=.9;
		let newSize = window.innerHeight*scale;
		if (newState) {
			if (window.innerWidth < newSize*.6) {
				newSize=(window.innerWidth/.6)*scale;
			}
		}
		return [newState, newSize];
	}
	const [newState, newSize] = getBookSize();
	const [usePortrait, setUsePortrait] = useState(newState);
	const [bookSize, setBookSize] = useState(newSize);
	const [fontBaseSize, setFontBaseSize] = useState(newSize/30);
	const flipBookRef = useRef(null);
	useEffect(() => {
		const handleResize = () => {
			const [newState, newSize] = getBookSize();
			setBookSize(newSize);
			setUsePortrait(newState);
			//flipBookRef.current.update();
			//flipBookRef.current.pageFlip().updateOrientation(usePortrait);
			console.log('resize');
			if (flipBookRef.current) {
				flipBookRef.current.pageFlip().update();
			}
		};
		window.addEventListener('resize', handleResize);
		const timer = setTimeout(() => {
			if(flipBookRef.current) {
				if (flipBookRef.current.pageFlip().getCurrentPageIndex() == 0) {
					//flipBookRef.current.pageFlip().flipNext();
					//document.getElementById('popupDiv').style.display = 'block';
					document.getElementById('popupDiv').style.opacity = 1;
				}
				//Perhaps have a pop up here, otherwise auto flip to next page:
			}
		}, 4500);
		return () => {
			clearTimeout(timer);
			window.removeEventListener('resize',handleResize);
		};
	}, []);
	return (
		<>
		<img src={pencilImg} pointerEvents='none' style={{ position: 'absolute', top: '-15%', right: '30%', height: '40%', transform: 'rotate(95deg)'}}/>
		<HTMLFlipBook
		ref={flipBookRef}
		width={bookSize*.6}
		height={bookSize}
		showCover={true}
		usePortrait={usePortrait}
		startZIndex={0}
		drawShadow={true}
		onFlip={() => { document.getElementById('popupDiv').style.opacity = 0;}}
		style={{fontSize: fontBaseSize}}>
			<CoverPage>
				<div id='popupDiv' className='popup' style={{position: 'absolute', zIndex: 2,}}>
					<div className='popup-text' style={{ position: 'relative', width: '80%', padding: '1rem'}}>
						Welcome to Karbon's Classic Equipment and Auto! To continue, please swipe left or click the right side of the page!
					</div>
					<img src={swipe} style={{position: 'absolute', top: '50%', right: 0, width: '16%', height: 'auto', transform: 'rotate(55deg)'}}/>
					<img src={tap} style={{position: 'absolute', top: '25%', right: 0, width: '20%', height: 'auto', transform: 'rotate(120deg)'}}/>
				</div>
			<TitlePage></TitlePage>
			</CoverPage>
			<IndexPage>	
			</IndexPage>
			<Page number="1">
				<h1>About:</h1>
				<p>About text here and some pics</p>
				<div>
					We fix, maintain, and modify: <br></br> Pickups, Tractors, Motorcycles, Muscle Cars, Combines, Semi-Trucks, and more.		
				</div>
			</Page>
			<Page number="2">
				<h1>Gallery:</h1>
				<div>Project Title</div>
				<img src={isuzu} width='100%' style={{top: 0, left: 0,}} height='auto' object-fit='contain'/>
			</Page>
			<Page number="3">
				<div>Project Title</div>
				<video style={{maxWidth: '60%', maxHeight: '60%'}} autoPlay loop muted>
					<source src={testVid} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="4">Page text</Page>
			<Page number="5">Page text</Page>
			<CoverPage>End</CoverPage>
		</HTMLFlipBook>
		</>
	);
}

export default App
