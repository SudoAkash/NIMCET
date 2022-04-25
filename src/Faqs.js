import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Questions (FAQs)",
    rows: [
        {
            title: "[1]. What are the eligibility criteria to appear for NIMCET-2022?",
            content: `The eligibility criteria to appear for NIMCET-2022 test are given in Section 2 of the
            Information Brochure of NIMCET-2022 available on the website https://www.nimcet.in.`,
        },
        {
            title: "[2]. How do I apply ONLINE?",
            content:
                `For online application, you need to logon on to the website https://www.nimcet.in. The
                online application process is explained in Section 6 of the Information Brochure of
                NIMCET 2022.`,
        },
        {
            title: "[3]. Can I change the allotted test center for NIMCET-2022 test",
            content: `No. The allotted test centre for NIMCET-2022 test will not be changed under any
            circumstances.`,
        },
        {
            title: "[4]. Can I edit the online application form after the final submission?",
            content:`No, you cannot edit the online application form after the final submission.`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "brown",
    rowTitleColor: "#191970",
     arrowColor: "red",
     rowContentColor: "#48484a",
       
        rowContentPaddingTop: '5px',
        rowContentPaddingBottom: '10px',
        rowContentPaddingLeft: '20px',
        rowContentPaddingRight: '20px',

};

const config = {
    // animate: true,
    // arrowIcon: "V",
     tabFocus: true
};

export default function Faqs() {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}