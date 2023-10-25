import { useRef } from "react";
import {
  LdButton,
  LdModal,
  LdTypo,
  LdSelect,
  LdOption
} from "@emdgroup-liquid/liquid/dist/react";
import "./styles.css";
import { defineCustomElements } from "@emdgroup-liquid/liquid/dist/loader";
import "@emdgroup-liquid/liquid/dist/css/liquid.global.css";

export default function App() {
  defineCustomElements();
  const modalRef = useRef(null);
  const tetherOptions = {
    bodyElement: modalRef.current,
    constraints: [{ to: "scrollParent" }]
  };
  return (
    <div className="App">
      <LdModal ref={modalRef} tetherOptions={tetherOptions}>
        <LdSelect
          filter
          placeholder={"select"}
          name={"filter"}
          mode="detached"
          tetherOptions={tetherOptions}
        >
          <LdOption key={0} value={"test"} selected={false} disabled={false}>
            <LdTypo variant="h6">test</LdTypo>
          </LdOption>
        </LdSelect>
      </LdModal>

      <LdButton onClick={() => modalRef.current.showModal()}>
        Open Modal
      </LdButton>
    </div>
  );
}
