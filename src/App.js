import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import ViewProduct from "./Products/ViewProduct";
import Home from "./Home/Home";
import LogoPosition from "./component/LogoPosition";
import ApplicationMethod from "./component/ApplicationMethod";
import ArtWork from "./component/ArtWork";
import LogoType from "./component/LogoType";
import UploadLogo from "./component/UploadLogo";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/view_product/:id" component={ViewProduct} />
        <Route path="/choose_position" component={LogoPosition} />
        <Route path="/customisation/method" component={ApplicationMethod} />
        <Route path="/customisation/artwork" component={ArtWork} />
        <Route path="/customisation/type" component={LogoType} />
        <Route path="/customisation/configure" component={UploadLogo} />
      </Switch>
    </div>
  );
};

export default App;
