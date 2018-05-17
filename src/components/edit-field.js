// import React, { PureComponent } from "react";
// // styles = {{ display: activeEdit ? "inline" : "none" }}
// export default class EditField extends PureComponent {
//     componentDidUpdate(prevProps, prevState) {
//         const isChangedToEditMode = !prevProps.activeEdit && this.props.activeEdit;
//         if (isChangedToEditMode) {
//         this.inputRef.focus();
//         }
//     }
//     inputRef = null;
    
//     setInputRef = el => { this.inputRef = el }
//     getContent() {
//         const { activeEdit, toggleHandler, done, text } = this.props;
//         return activeEdit ? (
//             <input 
//                 ref={this.setInputRef}
//                 placeholder="ENTER" 
//                 className="edit-input"
//                 style = {{ display: activeEdit ? "block" : "none" }}
//                 onBlur={ toggleHandler }
//                 value= {text}
//                 onChange={()=>{}}
//             />
//         ) :
//         (
//             <p 
//                 onClick={ toggleHandler } 
//                 className="item-context" 
//                 style={{
//                     textDecoration: done ? "line-through" : "none",
//                     color: done ? "#006A88" : "#000",
//                     display: activeEdit ? "none" : "block"
//                 }}
//             >
//                 {text}
//             </p>
//         )
//     }
//     render() {
//         const { toggleHandler, activeEdit, done, text } = this.props;
//         return (
//             <div>
//                 {this.getContent()}
//             </div>
//         )
//     }
// }

