import { useState, useLayoutEffect, useEffect, useRef, forwardRef, lazy  } from 'react'
import './App.css'
import HTMLFlipBook from 'react-pageflip'

// Assets:
import imgCover from './assets/imgs/cover.png'
import imgBack from './assets/imgs/back.png'
import imgPencil from './assets/imgs/pencil.png'
import tap from './assets/icons/tap-1-svgrepo-com.svg'
import swipe from './assets/icons/swipe-left-svgrepo-com.svg'

// It looks like these end up loading dynamically...
// Black and White Image Assets:
import bwImgB120TowIsu from './assets/imgs/bw/b120-tow-isu.png'
import bwImgB120WaterCrossing from './assets/imgs/bw/b120-water-crossing.png'
import bwImgB120WithStudebaker from './assets/imgs/bw/b120-with-Studebaker.png'
import bwImgB120Woods from './assets/imgs/bw/woods-b120pickup.png'
import bwImgBurb1 from './assets/imgs/bw/burb-1.png'
import bwImgBurb2 from './assets/imgs/bw/burb-2.png'
import bwImgComingBack from './assets/imgs/bw/coming-back.png'
import bwImgDodgeFlex from './assets/imgs/bw/dodge-flex.png'
import bwImgDodgeWater from './assets/imgs/bw/dodge-water.png'
import bwImgGrainFord from './assets/imgs/bw/grain-ford.png'
import bwImgHydromatic1 from './assets/imgs/bw/hydromatic-1.png'
import bwImgHydromatic2 from './assets/imgs/bw/hydromatic-2.png'
import bwImgHydromatic3 from './assets/imgs/bw/hydromatic-3.png'
import bwImgHydromatic4 from './assets/imgs/bw/hydromatic-4.png'
import bwImgHydromatic5 from './assets/imgs/bw/hydromatic-5.png'
import bwImgHydromatic6 from './assets/imgs/bw/hydromatic-6.png'
import bwImgInjectionPumpTiming from './assets/imgs/bw/injection-pump-timing.png'
import bwImgIsuzuH4 from './assets/imgs/bw/isuzu-h4.png'
import bwImgIsuzuHandCrank from './assets/imgs/bw/isuzu-hand-crank.png'
import bwImgIsuzuPlow1 from './assets/imgs/bw/isuzu-plow-1.png'
import bwImgLoadstar1 from './assets/imgs/bw/loadstar-1.png'
import bwImgLoadstarWorkers2 from './assets/imgs/bw/loadstar-workers-2.png'
import bwImgLoadstarWorkers from './assets/imgs/bw/loadstar-workers.png'
import bwImgNapco1 from './assets/imgs/bw/napco-1.png'
import bwImgNapco2 from './assets/imgs/bw/napco-2.png'
import bwImgNapco3 from './assets/imgs/bw/napco-3.png'
import bwImgNapco4 from './assets/imgs/bw/napco-4.png'
import bwImgPdTravelall from './assets/imgs/bw/pd-travelall.png'
import bwImgPlow1 from './assets/imgs/bw/plow-1.png'
import bwImgPlow2 from './assets/imgs/bw/plow-2.png'
import bwImgPlow3 from './assets/imgs/bw/plow-3.png'
import bwImgPlowAndTravelall2 from './assets/imgs/bw/plow-and-travelall-2.png'
import bwImgPlowAndTravelall from './assets/imgs/bw/plow-and-travelall.png'
import bwImgPtPump1 from './assets/imgs/bw/pt-pump-1.png'
import bwImgSplitCam from './assets/imgs/bw/split-cam.png'
import bwImgStudebaker4_711 from './assets/imgs/bw/Studebaker-4_71-1.png'
import bwImgStudebaker4_712 from './assets/imgs/bw/Studebaker-4_71-2.png'
import bwImgStudebaker4_713 from './assets/imgs/bw/Studebaker-4_71-3.png'
import bwImgStudebaker4_714 from './assets/imgs/bw/Studebaker-4_71-4.png'
import bwImgStudebaker from './assets/imgs/bw/Studebaker.png'
import bwImgTravelallFlex from './assets/imgs/bw/travelall-flex.png'
import bwImgWillysOpen from './assets/imgs/bw/willys-open.png'
import bwImgWillys from './assets/imgs/bw/willys.png'
import bwImgWillysValves from './assets/imgs/bw/willys-valves.png'
import bwImgWorkTravelall2 from './assets/imgs/bw/work-travelall-2.png'
// Color Image Assets:
import colorImgB120TowIsu from './assets/imgs/color/b120-tow-isu.png'
import colorImgB120WaterCrossing from './assets/imgs/color/b120-water-crossing.png'
import colorImgB120WithStudebaker from './assets/imgs/color/b120-with-Studebaker.png'
import colorImgB120Woods from './assets/imgs/color/woods-b120pickup.png'
import colorImgBurb1 from './assets/imgs/color/burb-1.png'
import colorImgBurb2 from './assets/imgs/color/burb-2.png'
import colorImgComingBack from './assets/imgs/color/coming-back.png'
import colorImgDodgeFlex from './assets/imgs/color/dodge-flex.png'
import colorImgDodgeWater from './assets/imgs/color/dodge-water.png'
import colorImgGrainFord from './assets/imgs/color/grain-ford.png'
import colorImgHydromatic1 from './assets/imgs/color/hydromatic-1.png'
import colorImgHydromatic2 from './assets/imgs/color/hydromatic-2.png'
import colorImgHydromatic3 from './assets/imgs/color/hydromatic-3.png'
import colorImgHydromatic4 from './assets/imgs/color/hydromatic-4.png'
import colorImgHydromatic5 from './assets/imgs/color/hydromatic-5.png'
import colorImgHydromatic6 from './assets/imgs/color/hydromatic-6.png'
import colorImgInjectionPumpTiming from './assets/imgs/color/injection-pump-timing.png'
import colorImgIsuzuH4 from './assets/imgs/color/isuzu-h4.png'
import colorImgIsuzuHandCrank from './assets/imgs/color/isuzu-hand-crank.png'
import colorImgIsuzuPlow1 from './assets/imgs/color/isuzu-plow-1.png'
import colorImgLoadstar1 from './assets/imgs/color/loadstar-1.png'
import colorImgLoadstarWorkers2 from './assets/imgs/color/loadstar-workers-2.png'
import colorImgLoadstarWorkers from './assets/imgs/color/loadstar-workers.png'
import colorImgNapco1 from './assets/imgs/color/napco-1.png'
import colorImgNapco2 from './assets/imgs/color/napco-2.png'
import colorImgNapco3 from './assets/imgs/color/napco-3.png'
import colorImgNapco4 from './assets/imgs/color/napco-4.png'
import colorImgPdTravelall from './assets/imgs/color/pd-travelall.png'
import colorImgPlow1 from './assets/imgs/color/plow-1.png'
import colorImgPlow2 from './assets/imgs/color/plow-2.png'
import colorImgPlow3 from './assets/imgs/color/plow-3.png'
import colorImgPlowAndTravelall2 from './assets/imgs/color/plow-and-travelall-2.png'
import colorImgPlowAndTravelall from './assets/imgs/color/plow-and-travelall.png'
import colorImgPtPump1 from './assets/imgs/color/pt-pump-1.png'
import colorImgSplitCam from './assets/imgs/color/split-cam.png'
import colorImgStudebaker4_711 from './assets/imgs/color/Studebaker-4_71-1.png'
import colorImgStudebaker4_712 from './assets/imgs/color/Studebaker-4_71-2.png'
import colorImgStudebaker4_713 from './assets/imgs/color/Studebaker-4_71-3.png'
import colorImgStudebaker4_714 from './assets/imgs/color/Studebaker-4_71-4.png'
import colorImgStudebaker from './assets/imgs/color/Studebaker.png'
import colorImgTravelallFlex from './assets/imgs/color/travelall-flex.png'
import colorImgWillysOpen from './assets/imgs/color/willys-open.png'
import colorImgWillys from './assets/imgs/color/willys.png'
import colorImgWillysValves from './assets/imgs/color/willys-valves.png'
import colorImgWorkTravelall2 from './assets/imgs/color/work-travelall-2.png'
// Black and White Video Assets:
import bwVidB120Flex from './assets/vids/bw/b120-flex.webm'
import bwVidBlownPiston from './assets/vids/bw/blown-piston.webm'
import bwVidClutch from './assets/vids/bw/clutch.webm'
import bwVidDodgeRearMain from './assets/vids/bw/dodge-rear-main.webm'
import bwVidDodgeValves1 from './assets/vids/bw/dodge-valves-1.webm'
import bwVidDodgeValves2 from './assets/vids/bw/dodge-valves-2.webm'
import bwVidFord9n from './assets/vids/bw/ford9n.webm'
import bwVidGrainFordCovers from './assets/vids/bw/grain-ford-covers.webm'
import bwVidGrainFordRockerRemoval from './assets/vids/bw/grain-ford-rocker-removal.webm'
import bwVidGrainFordValves1 from './assets/vids/bw/grain-ford-valves-1.webm'
import bwVidIsuzuCharger1 from './assets/vids/bw/isuzu-charger-1.webm'
import bwVidIsuzuCharger2 from './assets/vids/bw/isuzu-charger-2.webm'
import bwVidMassyharris from './assets/vids/bw/massyharris.webm'
import bwVidPistonAssemble from './assets/vids/bw/piston-assemble.webm'
import bwVidSmoky from './assets/vids/bw/smoky.webm'
import bwVidTravelallVac from './assets/vids/bw/travelall-vac.webm'
import bwVidTravelallUnderside from './assets/vids/bw/travelall-underside.webm'
import bwVidWelding from './assets/vids/bw/welding.webm'
import bwVidWillys from './assets/vids/bw/willys.webm'
import bwVidSullairFountian from './assets/vids/bw/sullair-fountian.webm'
import bwVidValvetrain from './assets/vids/bw/valvetrain.webm'
// Color Video Assets:
import colorVidB120Flex from './assets/vids/color/b120-flex.mp4'
import colorVidBlownPiston from './assets/vids/color/blown-piston.mp4'
import colorVidClutch from './assets/vids/color/clutch.mp4'
import colorVidDodgeRearMain from './assets/vids/color/dodge-rear-main.mp4'
import colorVidDodgeValves1 from './assets/vids/color/dodge-valves-1.mp4'
import colorVidDodgeValves2 from './assets/vids/color/dodge-valves-2.mp4'
import colorVidFord9n from './assets/vids/color/ford9n.mp4'
import colorVidGrainFordCovers from './assets/vids/color/grain-ford-covers.mp4'
import colorVidGrainFordRockerRemoval from './assets/vids/color/grain-ford-rocker-removal.mp4'
import colorVidGrainFordValves1 from './assets/vids/color/grain-ford-valves-1.mp4'
import colorVidIsuzuCharger1 from './assets/vids/color/isuzu-charger-1.mp4'
import colorVidIsuzuCharger2 from './assets/vids/color/isuzu-charger-2.mp4'
import colorVidMassyharris from './assets/vids/color/massyharris.mp4'
import colorVidPistonAssemble from './assets/vids/color/piston-assemble.mp4'
import colorVidSmoky from './assets/vids/color/smoky.mp4'
import colorVidTravelallVac from './assets/vids/color/travelall-vac.mp4'
import colorVidTravelallUnderside from './assets/vids/color/travelall-underside.mp4'
import colorVidWelding from './assets/vids/color/welding.mp4'
import colorVidWillys from './assets/vids/color/willys.mp4'
import colorVidSullairFountian from './assets/vids/color/sullair-fountian.webm'
import colorVidValvetrain from './assets/vids/color/valvetrain.webm'

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
	
	const [testLoad, setTestLoad] = useState(null);

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
			</Page>
			<Page number="3">
				<div>Loadstar:</div>
				<img src={bwImgLoadstar1} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgLoadstarWorkers} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="4">
				<img src={bwImgLoadstarWorkers2} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="5">
				<img src={bwImgNapco4} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgNapco3} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgNapco1} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="6">
				<img src={bwImgNapco2} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="7">
				<img src={bwImgDodgeFlex} width='100%' height='auto' object-fit='contain'/>
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidDodgeValves2} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="8">
				<img src={bwImgDodgeWater} width='100%' height='auto' object-fit='contain'/>
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidDodgeValves1} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="9">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidDodgeRearMain} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="10">
				<img src={bwImgGrainFord} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="11">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidGrainFordValves1} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="12">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidGrainFordCovers} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="13">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidGrainFordRockerRemoval} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="14">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidTravelallUnderside} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="15">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidTravelallVac} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="16">
				<img src={bwImgTravelallFlex} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgWorkTravelall2} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="17">
				<img src={bwImgPlowAndTravelall2} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgPlowAndTravelall} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="18">
				<img src={bwImgPlow1} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgPlow3} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="19">
				<img src={bwImgPlow2} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="20">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidIsuzuCharger1} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="21">
				<img src={bwImgIsuzuPlow1} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgIsuzuHandCrank} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="22">
				<img src={bwImgIsuzuH4} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="23">
				<img src={bwImgComingBack} width='100%' height='auto' object-fit='contain'/>
			</Page>
		<Page number="24">
				<img src={bwImgBurb1} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgBurb2} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="25">
				<img src={bwImgWillys} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgWillysOpen} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="26">
				<img src={bwImgWillysValves} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="27">
				<img src={bwImgStudebaker} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgStudebaker4_714} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="28">
				<img src={bwImgStudebaker4_713} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="29">
				<img src={bwImgStudebaker4_712} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="30">
				<img src={bwImgStudebaker4_711} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="31">
				<img src={bwImgB120WithStudebaker} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgB120Woods} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="32">
				<img src={bwImgB120WaterCrossing} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgB120TowIsu} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="33">
				<img src={bwImgHydromatic1} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgHydromatic2} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="34">
				<img src={bwImgHydromatic3} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="35">
				<img src={bwImgHydromatic4} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="36">
				<img src={bwImgHydromatic5} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgHydromatic6} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="37">
				<img src={bwImgInjectionPumpTiming} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="38">
				<img src={bwImgSplitCam} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="39">
				<img src={bwImgPtPump1} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="40">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidBlownPiston} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="41">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidClutch} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="42">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidWelding} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="43">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidSullairFountian} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="44">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidValvetrain} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="45">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidIsuzuCharger1} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="46">Links:</Page>
			<CoverPage>
				<img src={imgBack} width='100%' style={{bottom: 0, left: 0,}} height='auto' max-width='100%' max-height='100%' object-fit='contain'/>
			</CoverPage>
		</HTMLFlipBook>
		</>
	);
}

export default App
