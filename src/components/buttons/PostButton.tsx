import React, { Children } from "react";
import {PostButton} from "./postButton.styles";


class ButtonPost  extends React.Component <{children: React.ReactNode}> {
    render() {
        return (
            <PostButton type="submit" value="publicar"> {this.props.children}</PostButton>
        ); 
    }
}

export default ButtonPost;