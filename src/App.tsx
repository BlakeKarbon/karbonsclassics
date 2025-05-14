import { useState, useEffect, useRef, forwardRef, ReactNode } from 'react'
//import { useState, useLayoutEffect, useEffect, useRef, forwardRef, lazy  } from 'react'
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
//import bwImgB120TowIsu from './assets/imgs/bw/b120-tow-isu.png'
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
//import bwImgInjectionPumpTiming from './assets/imgs/bw/injection-pump-timing.png'
import bwImgIsuzuH4 from './assets/imgs/bw/isuzu-h4.png'
import bwImgIsuzuHandCrank from './assets/imgs/bw/isuzu-hand-crank.png'
import bwImgIsuzuPlow1 from './assets/imgs/bw/isuzu-plow-1.png'
import bwImgLoadstar1 from './assets/imgs/bw/loadstar-1.png'
import bwImgLoadstarWorkers2 from './assets/imgs/bw/loadstar-workers-2.png'
//import bwImgLoadstarWorkers from './assets/imgs/bw/loadstar-workers.png'
//import bwImgNapco1 from './assets/imgs/bw/napco-1.png'
import bwImgNapco2 from './assets/imgs/bw/napco-2.png'
import bwImgNapco3 from './assets/imgs/bw/napco-3.png'
import bwImgNapco4 from './assets/imgs/bw/napco-4.png'
//import bwImgPdTravelall from './assets/imgs/bw/pd-travelall.png'
import bwImgPlow1 from './assets/imgs/bw/plow-1.png'
import bwImgPlow2 from './assets/imgs/bw/plow-2.png'
import bwImgPlow3 from './assets/imgs/bw/plow-3.png'
import bwImgPlowAndTravelall2 from './assets/imgs/bw/plow-and-travelall-2.png'
import bwImgPlowAndTravelall from './assets/imgs/bw/plow-and-travelall.png'
import bwImgPtPump1 from './assets/imgs/bw/pt-pump-1.png'
import bwImgSplitCam from './assets/imgs/bw/split-cam.png'
import bwImgStudebaker4_711 from './assets/imgs/bw/Studebaker-4_71-1.png'
//import bwImgStudebaker4_712 from './assets/imgs/bw/Studebaker-4_71-2.png'
import bwImgStudebaker4_713 from './assets/imgs/bw/Studebaker-4_71-3.png'
import bwImgStudebaker4_714 from './assets/imgs/bw/Studebaker-4_71-4.png'
import bwImgStudebaker from './assets/imgs/bw/Studebaker.png'
import bwImgTravelallFlex from './assets/imgs/bw/travelall-flex.png'
import bwImgWillysOpen from './assets/imgs/bw/willys-open.png'
import bwImgWillys from './assets/imgs/bw/willys.png'
import bwImgWillysValves from './assets/imgs/bw/willys-valves.png'
import bwImgWorkTravelall2 from './assets/imgs/bw/work-travelall-2.png'
// Color Image Assets:
/*
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
*/
// Black and White Video Assets:
//import bwVidB120Flex from './assets/vids/bw/b120-flex.webm'
import bwVidBlownPiston from './assets/vids/bw/blown-piston.webm'
import bwVidClutch from './assets/vids/bw/clutch.webm'
import bwVidDodgeRearMain from './assets/vids/bw/dodge-rear-main.webm'
import bwVidDodgeValves1 from './assets/vids/bw/dodge-valves-1.webm'
import bwVidDodgeValves2 from './assets/vids/bw/dodge-valves-2.webm'
//import bwVidFord9n from './assets/vids/bw/ford9n.webm'
import bwVidGrainFordCovers from './assets/vids/bw/grain-ford-covers.webm'
import bwVidGrainFordRockerRemoval from './assets/vids/bw/grain-ford-rocker-removal.webm'
import bwVidGrainFordValves1 from './assets/vids/bw/grain-ford-valves-1.webm'
//import bwVidIsuzuCharger1 from './assets/vids/bw/isuzu-charger-1.webm'
//import bwVidIsuzuCharger2 from './assets/vids/bw/isuzu-charger-2.webm'
//import bwVidMassyharris from './assets/vids/bw/massyharris.webm'
//import bwVidPistonAssemble from './assets/vids/bw/piston-assemble.webm'
//import bwVidSmoky from './assets/vids/bw/smoky.webm'
import bwVidTravelallVac from './assets/vids/bw/travelall-vac.webm'
import bwVidTravelallUnderside from './assets/vids/bw/travelall-underside.webm'
import bwVidWelding from './assets/vids/bw/welding.webm'
//import bwVidWillys from './assets/vids/bw/willys.webm'
import bwVidSullairFountian from './assets/vids/bw/sullair-fountian.webm'
import bwVidValvetrain from './assets/vids/bw/valvetrain.webm'
// Color Video Assets:
/*
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
*/

const cutoffYear = 1990;

interface PageProps {
  children?: ReactNode;
  number?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
	return (
		<div className="page" ref={ref}>
			<div className="page-container">
				<div className="page-content">{props.children}</div>
			</div>
			<div className="page-footer">{props.number}</div>
		</div>
	);
});

const TitlePage = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
	return (
		<>
			<img src={imgCover} width='100%' style={{top: 0, left: 0,}} height='auto' max-width='100%' max-height='100%' object-fit='contain'/>
			<div className="title-page-cont" ref={ref}>
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
				{props.children}
			</div>

		</>
	);
});

const CoverPage = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
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
		const newState: boolean = window.innerWidth < window.innerHeight/.90; // Figure out why this ratio works.
		const scale=.9;
		let newSize: number = window.innerHeight*scale;
		if (newState) {
			if (window.innerWidth < newSize*.6) {
				newSize=(window.innerWidth/.6)*scale;
			}
		}
		return [newState, newSize];
	}
	const [rawState, rawSize] = getBookSize();
	const newState = typeof rawState === 'boolean' ? rawState : false;
	const newSize = typeof rawSize === 'number' ? rawSize : 600;
	//const [usePortrait, setUsePortrait] = useState<boolean>(newState);
	//const [bookSize, setBookSize] = useState<number>(newSize);
	const usePortrait: boolean = newState;
	const bookSize: number = newSize;
	const [fontBaseSize, setFontBaseSize] = useState<number>(newSize/30);
	//const flipBookRef = useRef<InstanceType<typeof HTMLFlipBook>>(null);
	const flipBookRef = useRef<any>(null); // Safe workaround
	/*
	 * import { PageFlip } from "page-flip";
	 * const flipBookRef = useRef<{ pageFlip: () => PageFlip } | null>(null);
	*/

	interface IndexEntryProps {
		entryTitle: string;
		entryPages: string;
		entryFlip: string;
	}
	
	function IndexEntry({ entryTitle, entryPages, entryFlip}: IndexEntryProps) {
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
					if (flipBookRef.current) {
						flipBookRef.current.pageFlip().flip(parseInt(entryFlip));
					}
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
		/*const handleResize = () => {
			const [newState, newSize] = getBookSize();
			//setBookSize(newSize);
			//setUsePortrait(newState);
			setBookSize(newSize as number);
			setUsePortrait(newState as boolean);
			//flipBookRef.current.update();
			//flipBookRef.current.pageFlip().updateOrientation(usePortrait);
			if (flipBookRef.current) {
				flipBookRef.current.pageFlip().update();
			}
		};
		window.addEventListener('resize', handleResize);*/
		const timer = setTimeout(() => {
			if(flipBookRef.current) {
				if (flipBookRef.current.pageFlip().getCurrentPageIndex() == 0) {
					//flipBookRef.current.pageFlip().flipNext();
					//document.getElementById('popupDiv').style.display = 'block';
					const popupDiv = document.getElementById('popupDiv');
					if (popupDiv) {
						popupDiv.style.opacity = '1';
					}
				} else {
					setFontBaseSize(newSize/30)
				}
				//Perhaps have a pop up here, otherwise auto flip to next page:
			}
		}, 4500);
		return () => {
			clearTimeout(timer);
			//window.removeEventListener('resize',handleResize);
		};
	}, []);
	return (
		<>
		<img className='pencil' src={imgPencil} style={{ position: 'absolute', top: '-15%', right: '30%', height: '40%', transform: 'rotate(95deg)'}}/>
		<HTMLFlipBook
		ref={flipBookRef}
		className='flipbook-class'
		startPage={0}
		autoSize={true}
		maxShadowOpacity={0.6}
		showPageCorners={true}
		width={bookSize*.6}
		height={bookSize as number}
		showCover={true}
		usePortrait={usePortrait}
		startZIndex={0}
		drawShadow={true}
		onFlip={() => { 
			const popup = document.getElementById('popupDiv');
			if (popup) {
				popup.style.opacity = '0';
			}
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
				<h1>Index:</h1>
				<IndexEntry entryTitle='Cover' entryPages='0' entryFlip='0'></IndexEntry>
				<IndexEntry entryTitle='Index' entryPages='1' entryFlip='1'></IndexEntry>
				<IndexEntry entryTitle='About and Social Media' entryPages='2' entryFlip='2'></IndexEntry>
				<div>Gallery:</div>
				<IndexEntry entryTitle='4x4 Loadstar 1600' entryPages='3' entryFlip='3'></IndexEntry>
				<IndexEntry entryTitle='57 Napco Chevy' entryPages='4' entryFlip='4'></IndexEntry>
				<IndexEntry entryTitle='67 Suburban and Sullair' entryPages='5' entryFlip='5'></IndexEntry>
				<IndexEntry entryTitle='59 Willys Wagon' entryPages='6-7' entryFlip='6'></IndexEntry>
				<IndexEntry entryTitle='65 Isuzu Elfin' entryPages='8-9' entryFlip='8'></IndexEntry>
				<IndexEntry entryTitle='63 Dodge Power Wagon' entryPages='10-12' entryFlip='10'></IndexEntry>
				<IndexEntry entryTitle='60s Ford Grain Truck' entryPages='13' entryFlip='13'></IndexEntry>
				<IndexEntry entryTitle='59 IH Travelall' entryPages='14-17' entryFlip='14'></IndexEntry>
				<IndexEntry entryTitle='65 IH R210D Plow' entryPages='17-20' entryFlip='18'></IndexEntry>
				<IndexEntry entryTitle='80s AC Rocker Arms' entryPages='20' entryFlip='20'></IndexEntry>
				<IndexEntry entryTitle='62 Studebaker Truck' entryPages='21-23' entryFlip='21'></IndexEntry>
				<IndexEntry entryTitle='60 IH Pickup' entryPages='24-25' entryFlip='24'></IndexEntry>
				<IndexEntry entryTitle='53 Hydromatic' entryPages='26-29' entryFlip='26'></IndexEntry>
				<IndexEntry entryTitle='JD 6466' entryPages='29-31' entryFlip='29'></IndexEntry>
				<div style={{textAlign: 'center', fontStyle: 'italic', fontSize: '80%', position: 'absolute', bottom: '0%', left: '0%', padding: '5%'}}>
					"Can a few people, earning less than $2 USD per day, without parts or roads, use it continuously for over 40 years?"
					<br></br>
					- Blake, in response to 
					<br></br>
					"What qualifies as a truck?"
				</div>
			</Page>
			<Page number="2">
				<h1>About:</h1>
				<p style={{textIndent: '10%'}}>
				Karbon's Classic Equipment and Auto provides mobile mechanic services specializing in vehicles and equipment manufactured before {cutoffYear}.
				We have extensive experience working with all kinds of vehicles and machinery including one-of-one and very rare models.
				Our passion is to keep your old equipment in use, whether that be taking friends on rides to a car show, hauling goods, or pulling a plow.
				</p>
				<h1>Social Media:</h1>
				<div></div>
			</Page>
			<Page number="3">
				<h1>Gallery:</h1>
				<div>Wheel cylinder replacement on this 1963, factory 4x4, International Harvester, Loadstar 1600:</div>
				<img src={bwImgLoadstar1} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgLoadstarWorkers2} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="4">
				<div>1957 Napco Conversion Chevy Pickup spotted on a clients property:</div>
				<img src={bwImgNapco4} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgNapco3} width='100%' height='auto' object-fit='contain'/>
				<div style={{position: 'absolute', textAlign: 'left', left: '42%'}}>Closeup of a locking hub.</div>
				<div>
					<img src={bwImgNapco2} width='40%' height='auto' object-fit='contain'/>
				</div>
			</Page>
			<Page number="5">
				<div>Dylan's 1967 4x4 Suburban:</div>
				<img src={bwImgBurb1} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgBurb2} width='100%' height='auto' object-fit='contain'/>
				<div>Sullair air compressor water fountian:</div>
				<video style={{maxWidth: '70%', maxHeight: '70%'}} autoPlay loop muted>
					<source src={bwVidSullairFountian} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="6">
				<div>1959 Barn Door Willys Wagon:</div>
				<img src={bwImgWillys} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgWillysOpen} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="7">
				<div>Valve adjustment on the flathead inline 6:</div>
				<img src={bwImgWillysValves} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="8">
				<div>Blake hand cranking the diesel 1965 Isuzu Elfin:</div>
				<img src={bwImgIsuzuHandCrank} width='100%' height='auto' object-fit='contain'/>
				<div>This is the only known left hand drive and english instrument isuzu elfin known to exist. It has a factory 4 cylinder C240 diesel engine and gets 23 mpg. Its rated as a 1.75 ton truck.</div>
			</Page>
			<Page number="9">
				<div>Hauling a 1960s, 7.25 liter, 4 cylinder, H model cummins:</div>
				<img src={bwImgIsuzuH4} width='100%' height='auto' object-fit='contain'/>
				<div>Fabricating brake reservoir:</div>
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidWelding} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="10">
				<div>Blake's previously owned 1963 Dodge W200 Power Wagon ex forestry service truck:</div>
				<img src={bwImgDodgeFlex} width='100%' height='auto' object-fit='contain'/>
				<div>Live valve adjustment:</div>
				<video style={{maxWidth: '80%', maxHeight: '80%'}} autoPlay loop muted>
					<source src={bwVidDodgeValves1} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="11">
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidDodgeValves2} type="video/webm"/>
					Error Loading Video...
				</video>
				<div>Water crossing: (Used as intended)</div>
				<img src={bwImgDodgeWater} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="12">
				<div>Wax rope rear main seal / oil pan gasket replacement:</div>
				<video style={{maxWidth: '80%', maxHeight: '80%'}} autoPlay loop muted>
					<source src={bwVidDodgeRearMain} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="13">
				<div>1960's Ford grain truck:</div>
				<img src={bwImgGrainFord} width='100%' height='auto' object-fit='contain'/>
				<div>Bent pushrod replacement and live valve adjustment:</div>
				<div>
				<span>
				<video style={{maxWidth: '33%', maxHeight: '33%'}} autoPlay loop muted>
					<source src={bwVidGrainFordValves1} type="video/webm"/>
					Error Loading Video...
				</video>
				</span>
				<span>
				<video style={{maxWidth: '33%', maxHeight: '33%'}} autoPlay loop muted>
					<source src={bwVidGrainFordCovers} type="video/webm"/>
					Error Loading Video...
				</video>
				</span>
				<span>
				<video style={{maxWidth: '33%', maxHeight: '33%'}} autoPlay loop muted>
					<source src={bwVidGrainFordRockerRemoval} type="video/webm"/>
					Error Loading Video...
				</video>
				</span>
				</div>
			</Page>
			<Page number="14">
				<div>Blake's 1959 International Harvester Travelall:</div>
				<img src={bwImgTravelallFlex} width='100%' height='auto' object-fit='contain'/>
				<div>Often used as a great service truck:</div>
				<img src={bwImgWorkTravelall2} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="15">
				<div>Underside driveline shot:</div>
				<video style={{maxWidth: '90%', maxHeight: '90%'}} autoPlay loop muted>
					<source src={bwVidTravelallUnderside} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="16">
				<div>Carburator vacuum diag:</div>
				<video style={{maxWidth: '100%', maxHeight: '100%'}} autoPlay loop muted>
					<source src={bwVidTravelallVac} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="17">
				<div>Being used to revive a 1963 International Harvester R210D:</div>
				<img src={bwImgPlowAndTravelall2} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgPlowAndTravelall} width='80%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="18">
				<div>Swapping split ring rims:</div>
				<img src={bwImgPlow1} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgPlow2} width='70%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="19">
				<div>Working on the factory 11 liter H6 cummons:</div>
				<img src={bwImgPlow3} width='100%' height='auto' object-fit='contain'/>
				<div>Internal shot from rebuilding the injection pump:</div>
				<img src={bwImgPtPump1} width='70%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="20">
				<div>Using the Isuzu as a service truck for the plow:</div>
				<img src={bwImgIsuzuPlow1} width='100%' height='auto' object-fit='contain'/>
				<div>Rocker arm assembly on a 1980s Allis Chalmers tractor.</div>
				<video style={{maxWidth: '55%', maxHeight: '55%'}} autoPlay loop muted>
					<source src={bwVidValvetrain} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="21">
				<div>1962 Studebaker medium duty with factory 4-71 Detroit Diesel:</div>
				<img src={bwImgStudebaker} width='100%' height='auto' object-fit='contain'/>
				<div>4-71 Detroit engine:</div>
				<span>
				<img src={bwImgStudebaker4_714} width='50%' height='auto' object-fit='contain'/>
				<img src={bwImgStudebaker4_713} width='50%' height='auto' object-fit='contain'/>
				</span>
			</Page>
			<Page number="22">
				<div>Governor surging diagnosis and repair:</div>
				<img src={bwImgStudebaker4_711} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="23">
				<div>Blake's B120 Pickup next to the Studebaker:</div>
				<img src={bwImgB120WithStudebaker} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="24">
				<div>Blake's 1960 International Harvester B120 Pickup:</div>
				<img src={bwImgB120Woods} width='100%' height='auto' object-fit='contain'/>
				<img src={bwImgB120WaterCrossing} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="25">
				<div>Clutch inspection:</div>
				<video style={{maxWidth: '90%', maxHeight: '90%'}} autoPlay loop muted>
					<source src={bwVidClutch} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="26">
				<div>1953 Chevy truck hydromatic rebuild:</div>
				<img src={bwImgHydromatic1} width='90%' height='auto' object-fit='contain'/>
				<img src={bwImgHydromatic2} width='90%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="27">
				<div>Bands:</div>
				<img src={bwImgHydromatic3} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="28">
				<div>Planetary set:</div>
				<img src={bwImgHydromatic4} width='80%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="29">
				<div>Hydraulic control circuitry:</div>
				<img src={bwImgHydromatic5} width='100%' height='auto' object-fit='contain'/>
				<div>Torque converter internal:</div>
				<img src={bwImgHydromatic6} width='80%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="30">
				<div>Split camshaft pulled from a John Deere 6466:</div>
				<img src={bwImgSplitCam} width='90%' height='auto' object-fit='contain'/>
			</Page>
			<Page number="31">
				<div>Preignition damage on a John Deere 6466:</div>
				<video style={{maxWidth: '80%', maxHeight: '80%'}} autoPlay loop muted>
					<source src={bwVidBlownPiston} type="video/webm"/>
					Error Loading Video...
				</video>
			</Page>
			<Page number="32">
				<img src={bwImgComingBack} width='100%' height='auto' object-fit='contain'/>
			</Page>
			<CoverPage>
				<img src={imgBack} width='100%' style={{bottom: 0, left: 0,}} height='auto' max-width='100%' max-height='100%' object-fit='contain'/>
			</CoverPage>
		</HTMLFlipBook>
		</>
	);
}

export default App
