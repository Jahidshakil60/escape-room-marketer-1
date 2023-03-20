import Hero from "@/components/service/Hero";
import ListOfServeice from "@/components/service/ListOfServeice";
import MarketingCompanies from "@/components/service/MarketingCompanies";
import OurWork from "@/components/service/OurWork";
import Payperclick from "@/components/service/Payperclick";
import React, { useState } from "react";

function ConversionRateOptimization(props) {
	const [ourWork, setourWork] = useState(props.ourWork);
    const [companies, setCompanies] = useState(props.companiesData);
    const [listOfServeice, setListOfServeice] = useState(props.listOfServeiceData);
	return (
		<div>
			<Hero
				thirdPic="conversionRateOptimization/illo-PrintMoney-Desktop-new.svg"
				title="Conversion Rate Optimization That Prints
                Money Like The Federal Reserve"
				pera="From landing pages to a/b testing, we're the conversion rate optimization agency
                that raises conversion rates and defines conversion goals for the best user experience."
			/>
			<OurWork ourWorkData={ourWork} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa]"></div>
            <Payperclick />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180"></div>
            <MarketingCompanies companiesData={companies} />
            <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
            <ListOfServeice listOfServeiceData={listOfServeice} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>

           
		</div>
	);
}

export async function getServerSideProps(context) {
	// let cardContent = await fetch("http://localhost:3000/api/cardcontent?slug=linkBuildingService");
	// let cardContentData = await cardContent.json();

	let data = await fetch("http://localhost:3000/api/companies?slug=ppcAgency");
	let companiesData = await data.json();

	// let keyserveicedata = await fetch("http://localhost:3000/api/keyserveice?slug=linkBuildingService");
	// let keyServeice = await keyserveicedata.json();

	// let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=linkBuildingService");
	// let faqData = await faqSectiondata.json();

	let ourWorkData = await fetch("http://localhost:3000/api/ourwork?slug=conversionRateOptimization");
	let ourWork = await ourWorkData.json();

	let listOfServeice = await fetch("http://localhost:3000/api/listofserveice?slug=conversionRateOptimization");
	let listOfServeiceData = await listOfServeice.json();
	return {
		props: { ourWork, companiesData }, // will be passed to the page component as props
	};
}

export default ConversionRateOptimization;
