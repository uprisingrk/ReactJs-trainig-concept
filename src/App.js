
import './App.css';

//after routing concept
import React from 'react';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';


// import MyFuncComp from './MyFuncComp';
// import MyClassComp from './MyClassComp'
// import ProductFuncComp from './ProductFuncComp';
// import ProdClassComp from './ProdClassComp';
// import { ProdArrowFunc } from './ProdArrowFunc';
// import CarComp from './CarComp';
// import ProdStateClassComp from './ProdStateClassComp';
// import ParentComp from './ParentComp';
// import ProductMap from './ProductMapParent';
// import ProdFilterComp from './ProdFilterComp';
// import FormComp from './FormComp';
// import ProductForm from './ProductForm';
//  import FetchComp from './FetchComp';

// from here we used browser router 

import FooterComp from './FooterComp';
import Home from './prodcomponent/Home';
import AboutUs from './prodcomponent/AboutUs';
import Contact from './prodcomponent/Contact';
import Header from './prodcomponent/Header';
import Users from './prodcomponent/Users';
import ProdUseEffect from './prodcomponent/ProdUseEffect';
import Registration from './prodcomponent/Registration';

import UseStateComp from './UseStateComp';
import UseEffect from './UseEffect';
import UseContextFirst from './UseContextFirst';




function App() {
  return (
    <div>
     {/* <MyFuncComp name= 'Raushan' sal='45000'></MyFuncComp>
     <MyClassComp name= 'Hemant' sal='35000'></MyClassComp> */}
     {/* <ProductFuncComp Name='Vivo' Id='1' Price='19000' ProdDesc='This is Vivo s1 pro mobile'></ProductFuncComp>
     <ProdClassComp Name='Samsung' Id ='2' Price='21000' ProdDesc='This is Samsung galexy new model phone'>
     </ProdClassComp>
     <ProdArrowFunc Name='Sony ' Id ='3' Price='31000' ProdDesc='This is Sony new model phone'></ProdArrowFunc>
   <CarComp></CarComp> */}
   {/* <ProdStateClassComp></ProdStateClassComp> */}
   {/* <ParentComp></ParentComp> */}
   {/* <ProductMap></ProductMap> */}
   {/* <ProdFilterComp></ProdFilterComp> */}
   {/* <FormComp></FormComp> */}
   {/* <ProductForm></ProductForm> */}

   {/* <FetchComp></FetchComp> */}
   {/* <NavComp></NavComp>
 <Home></Home>
 <FooterComp></FooterComp>  */}

      <Router>
      <Header></Header>
         <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={AboutUs}/>
          <Route exact path='/contact' Component={Contact}/>
          <Route exact path='/users' Component={Users}/>
          <Route exact path='/products' Component={ProdUseEffect}/>
          <Route exact path='/registration' Component={Registration}/>
         </Routes>
        <FooterComp></FooterComp>
      </Router>


      {/* started hooks concept from here */}

      {/* <UseStateComp></UseStateComp> */}
      {/* <UseEffect></UseEffect>  */}
       {/* <UseContextFirst></UseContextFirst> */}

    </div>
  );
}

export default App;
