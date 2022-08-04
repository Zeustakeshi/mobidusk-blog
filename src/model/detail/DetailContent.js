import React from "react";
import ContentImg from "./ContentImg";
import ContentParagraph from "./ContentParagraph";
import ContentTitle from "./ContentTitle";

const DetailContent = ({ className = "" }) => {
    return (
        <div className={`p-5 ${className}`}>
            <ContentTitle>Chương 1</ContentTitle>
            <ContentParagraph>
                Gastronomy atmosphere set aside. Slice butternut cooking home.
                Delicious romantic undisturbed raw platter will meld. Thick
                Skewers skillet natural, smoker soy sauce wait roux. slices
                rosette bone-in simmer precision alo ngside baby leeks. Crafting
                renders aromatic enjoyment, then slices taco. Minutes
                undisturbed cuisine lunch magnificent mustard curry. Juicy share
                baking sheet pork. Meals ramen rarities selection, raw pastries
                richness magnificent atmosphere. Sweet soften dinners, cover
                mustard infused skillet, Skewers on culinary experience. Juicy
                meatballs brisket slammin' baked.
            </ContentParagraph>
            <ContentParagraph>
                shoulder. Juicy smoker soy sauce burgers brisket. polenta
                mustard hunk greens. Wine technique snack skewers chuck excess.
                Oil heat slowly. slices natural delicious, set aside magic tbsp
                skillet, bay leaves brown centerpiece. fruit soften edges frond
                slices onion snack pork steem on wines excess technique cup;
                Cover smoker soy sauce fruit snack. Sweet one-dozen scrape
                delicious, non sheet raw crunch mustard. Minutes clever slotted
                tongs scrape, brown steem undisturbed rice. Food qualities
                braise chicken cuts bowl through slices butternut snack. Tender
                meat juicy dinners. One-pot low heat plenty of time adobo fat
                raw soften fruit. sweet renders bone-in marrow richness kitchen,
                fricassee basted pork shoulder. Delicious butternut squash hunk.
                Flavor centerpiece plate, delicious ribs bone-in meat, excess
                chef end. sweet effortlessly pork, low heat smoker soy sauce
                flavor meat, rice fruit fruit. Romantic fall-off-the-bone
                butternut chuck rice burgers.
            </ContentParagraph>
            <ContentImg
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className=" w-full max-w-[820px] mx-auto my-8 rounded-[20px]"
                imgErrorClass="min-h-[300px]"
            />
            <ContentTitle>Chương 2</ContentTitle>
            <ContentParagraph>
                Gastronomy atmosphere set aside. Slice butternut cooking home.
                Delicious romantic undisturbed raw platter will meld. Thick
                Skewers skillet natural, smoker soy sauce wait roux. slices
                rosette bone-in simmer precision alo ngside baby leeks. Crafting
                renders aromatic enjoyment, then slices taco. Minutes
                undisturbed cuisine lunch magnificent mustard curry. Juicy share
                baking sheet pork. Meals ramen rarities selection, raw pastries
                richness magnificent atmosphere. Sweet soften dinners, cover
                mustard infused skillet, Skewers on culinary experience. Juicy
                meatballs brisket slammin' baked.
            </ContentParagraph>
        </div>
    );
};

export default DetailContent;
