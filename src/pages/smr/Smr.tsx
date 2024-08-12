import {useGetTreeRowsQuery} from "../../services/base-api.ts";

export const Smr = () => {
    const {data} = useGetTreeRowsQuery()
    console.log(data)
    return (
        <div>
            <p>
                {data && data[0].rowName}
                {data && data[0].salary}
                {data && data[0].equipmentCosts}
                {data && data[0].overheads}
                {data && data[0].estimatedProfit}


            </p>
            <p>123</p>




            <button>добавить ченить</button>
        </div>
    );
};


