import { useState, useLayoutEffect, useEffect, useRef, forwardRef  } from 'react'
import './App.css'
import HTMLFlipBook from 'react-pageflip'

// Assets:
import coverImg from './assets/imgs/cover.png'
import fp1 from './assets/textures/stains/fingerprint-1.png'
import fp2 from './assets/textures/stains/fingerprint-2.png'
import fp3 from './assets/textures/stains/fingerprint-3.png'
import fps1 from './assets/textures/stains/fingerprint-smudge-1.png'
import fps2 from './assets/textures/stains/fingerprint-smudge-2.png'
import fps3 from './assets/textures/stains/fingerprint-smudge-3.png'
import fps4 from './assets/textures/stains/fingerprint-smudge-4.png'
import oil1 from './assets/textures/stains/oil-1.png'

const cutoffYear = 1990;

const Page = forwardRef((props, ref) => {
	return (
		<div className="page" ref={ref}>
			<div className="page-content">{props.children}</div>
			<div className="page-footer">Page number: {props.number}</div>
		</div>
	);
});

const IndexPage = forwardRef((props, ref) => {
	return (
		<div className="page" ref={ref}>
		This will be the index page.
		{props.children}
		</div>
	);
});

const CoverPage = forwardRef((props, ref) => {
	return (
		<>
		<div className="cover-page" ref={ref}>	
			<div className="cover-page-filter"></div>
			<img className="stain" src={fps1} style={{bottom: '35%', right: 0, opacity: 0.7, width: '15%'}}/>
			<img className="stain" src={fps2} style={{bottom: '30%', right: -10, opacity: 0.6, width: '18%', transform: 'rotate(-16deg)'}}/>
			<img src={coverImg} width='100%' style={{top: 0, left: 0,}} height='auto' max-width='100%' max-height='100%' object-fit='contain'/>
			<p>We fix: <br></br> Pickups, Tractors, Motorcycles, Muscle Cars, Combines, Semi-Trucks, and more.</p>
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
				}
				//Perhaps have a pop up here, otherwise auto flip to next page:
			}
		}, 6000);
		return () => {
			clearTimeout(timer);
			window.removeEventListener('resize',handleResize);
		};
	}, []);
	return (
		<HTMLFlipBook
		ref={flipBookRef}
		width={bookSize*.6}
		height={bookSize}
		showCover={true}
		usePortrait={usePortrait}
		startZIndex={0}
		drawShadow={true}
		style={{fontSize: fontBaseSize}}>
			<CoverPage>
			</CoverPage>
			<IndexPage>
			</IndexPage>
			<Page number="1">
				<h1>Title</h1>
				<div>
				<p>Example Text</p>
				</div>
			</Page>
			<Page number="2">Page text</Page>
			<Page number="3">Page text</Page>
			<Page number="4">Page text</Page>
			<Page number="5">Page text</Page>
			<CoverPage>End</CoverPage>
		</HTMLFlipBook>
	);
}

export default App
