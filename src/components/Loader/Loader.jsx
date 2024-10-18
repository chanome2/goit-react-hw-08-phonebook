import { DNA } from "react-loader-spinner";

//https://mhnpd.github.io/react-loader-spinner/docs/intro
export const Loader = () => {

    return <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />
};