import {Suspense,lazy} from 'react';

const LazyComp= lazy(()=>import ("../login"));
const LazyLoading=()=>{
    return(
        <div>
            <Suspense>
            <h1>LAzyLoading</h1>
            <LazyComp/>
            </Suspense>
        </div>
    )
} 
export default LazyLoading;