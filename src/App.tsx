import { useState, useLayoutEffect, useEffect, useRef, forwardRef, lazy  } from 'react'
import './App.css'
import HTMLFlipBook from 'react-pageflip'

// Assets:
import imgCover from './assets/imgs/cover.png'
import imgBack from './assets/imgs/back.png'
import imgPencil from './assets/imgs/pencil.png'
import tap from './assets/icons/tap-1-svgrepo-com.svg'
import swipe from './assets/icons/swipe-left-svgrepo-com.svg'



const cutoffYear = 1990;

const Page = forwardRef((props, ref) => {
	return (
		<div className="page" ref={ref}>
			<div className="page-container">
				<div className="page-content">{props.children}</div>
			</div>
			<div className="page-footer">{props.number}</div>
		</div>
	);
});

const IndexPage = forwardRef((props, ref) => {
	return (
		<div className="page" ref={ref}>
			<div style={{padding: '5%'}}>	
				{props.children}
			</div>
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
			<img src={imgCover} width='100%' style={{top: 0, left: 0,}} height='auto' max-width='100%' max-height='100%' object-fit='contain'/>
			<div className="title-page-cont">
				<div style={{width: '90%'}}>
					We fix, maintain, and modify:
					<br></br>
					<div style={{fontSize: '85%', fontWeight: 'normal'}}>
						Pickups, Tractors, Motorcycles, Muscle Cars, Combines, Semi-Trucks, and more.
					</div>
				</div>
				<div className="title-contact">
				(720)-404-0695
				<br></br>
				karbonsclassics@gmail.com
				</div>
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

	function IndexEntry({ entryTitle, entryPages, entryFlip}) {
		return (
			<div style={{
				width: '100%',
				alignItems: 'center',
				display: 'flex',
			}}>
				<span style={{
					marginRight: '1%',
				}}>
				<a onClick={() => {
					flipBookRef.current.pageFlip().flip(parseInt(entryFlip));
				}}>{entryTitle}</a>
				</span>
				<span style={{
					flexGrow: 1,
					borderBottom: '.2rem dotted black',
					margin: '0 1%',
				}}></span>
				<span style={{
					marginLeft: '1%',
				}}>
				{entryPages}
				</span>
			</div>
		);
	}

	useEffect(() => {
		const handleResize = () => {
			const [newState, newSize] = getBookSize();
			setBookSize(newSize);
			setUsePortrait(newState);
			//flipBookRef.current.update();
			//flipBookRef.current.pageFlip().updateOrientation(usePortrait);
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
		<img src={imgPencil} pointerEvents='none' style={{ position: 'absolute', top: '-15%', right: '30%', height: '40%', transform: 'rotate(95deg)'}}/>
		<HTMLFlipBook
		ref={flipBookRef}
		width={bookSize*.6}
		height={bookSize}
		showCover={true}
		usePortrait={usePortrait}
		startZIndex={0}
		drawShadow={true}
		onFlip={() => { 
			document.getElementById('popupDiv').style.opacity = 0;
			//console.log(flipBookRef.current.pageFlip());
		}}
		style={{fontSize: fontBaseSize}}>
			<CoverPage>
				<div id='popupDiv' className='popup' style={{position: 'absolute', zIndex: 2,}}>
					<div className='popup-text' style={{ position: 'relative', width: '70%', padding: '1rem'}}>
						Welcome to Karbon's Classic Equipment and Auto! Swipe or tap the sides to flip pages!
					</div>
					<img src={swipe} style={{position: 'absolute', top: '50%', right: 0, width: '16%', height: 'auto', transform: 'rotate(55deg)'}}/>
					<img src={tap} style={{position: 'absolute', top: '25%', right: 0, width: '20%', height: 'auto', transform: 'rotate(120deg)'}}/>
				</div>
			<TitlePage></TitlePage>
			</CoverPage>
			<Page number="1">
				<h1>About:</h1>
				<p style={{textIndent: '10%'}}>
				Karbon's Classic Equipment and Auto provides mobile mechanic services specializing in vehicles and equipment manufactured before {cutoffYear}.
				We have extensive experience working with all kinds of vehicles and machinery including one-of-one and very rare models.
				Our passion is to keep your old equipment in use, whether that be taking friends on rides to a car show, hauling goods, or pulling a plow.
				</p>
				<h1>Index:</h1>
				<IndexEntry entryTitle='Cover' entryPages='0' entryFlip='0'></IndexEntry>
				<IndexEntry entryTitle='Index' entryPages='1' entryFlip='1'></IndexEntry>
				<IndexEntry entryTitle='Gallery' entryPages='2-7' entryFlip='2'></IndexEntry>
				<IndexEntry entryTitle='Social Media Links' entryPages='8' entryFlip='8'></IndexEntry>
				<div style={{textAlign: 'center', fontStyle: 'italic', fontSize: '80%', position: 'absolute', bottom: '5%', left: '0%', padding: '5%'}}>
					"Can a few people, earning less than $2 USD per day, without parts or roads, use it continuously for over 40 years?"
					<br></br>
					- Blake, in response to 
					<br></br>
					"What qualifies as a truck?"
				</div>
			</Page>
			<Page number="2">
				<h1>Gallery:</h1>
				<div>Project Title</div>
				<img src={imgBack} width='100%' style={{top: 0, left: 0,}} height='auto' object-fit='contain'/>
			</Page>
			<Page number="3">
				<div>Project Title</div>
			</Page>
			<Page number="4">Page text</Page>
			<Page number="5">Page text</Page>
			<Page number="6">Page text</Page>
			<Page number="7">Page text</Page>
			<Page number="8">Links:</Page>
			<CoverPage>
				<img src={imgBack} width='100%' style={{bottom: 0, left: 0,}} height='auto' max-width='100%' max-height='100%' object-fit='contain'/>
			</CoverPage>
		</HTMLFlipBook>
		</>
	);
}

export default App
