import React, { useState } from "react";

export const QuouteFormData = React.createContext({
  building: "",
  setBuilding: (buildingValue) => {},
  contents: "",
  setContents: (value) => {},
  businessIncome: "",
  setBusinessIncome: (value) => {},
  propertyEnhancement: "",
  setPropertyEnhancement: (value) => {},
  equipmentBreakdown: "",
  setEquipmentBreakdown: (value) => {},
  tenantGlass: "",
  setTenantGlass: (value) => {},
  ordinanceAndLaw: "",
  setOrdinanceAndLaw: (value) => {},
  premises: "",
  setPremises: (value) => {},
  products: "",
  setProducts: (value) => {},
  stopGap: "",
  setStopGap: (value) => {},
  damageToRentedProperty: "",
  setDamageToRentedProperty: (value) => {},
  nonOwnedAuto: "",
  setNonOwnedAuto: (value) => {},
  employeeBenifits: "",
  setEmployeeBenifits: (value) => {},
});
export const QuouteFormDataProvider = (props) => {
  const [building, setBuilding] = useState("");
  const [contents, setContents] = useState("");
  const [businessIncome, setBusinessIncome] = useState("");
  const [propertyEnhancement, setPropertyEnhancement] = useState("");
  const [equipmentBreakdown, setEquipmentBreakdown] = useState("");
  const [tenantGlass, setTenantGlass] = useState("");
  const [ordinanceAndLaw, setOrdinanceAndLaw] = useState("");
  const [premises, setPremises] = useState("");
  const [products, setProducts] = useState("");
  const [stopGap, setStopGap] = useState("");
  const [damageToRentedProperty, setDamageToRentedProperty] = useState("");
  const [nonOwnedAuto, setNonOwnedAuto] = useState("");
  const [employeeBenifits, setEmployeeBenifits] = useState("");

  return (
    <QuouteFormData.Provider
      value={{
        building,
  setBuilding,
  contents,
  setContents,
  businessIncome,
  setBusinessIncome,
  propertyEnhancement,
  setPropertyEnhancement,
  equipmentBreakdown,
  setEquipmentBreakdown,
  tenantGlass,
  setTenantGlass,
  ordinanceAndLaw,
  setOrdinanceAndLaw,
  premises,
  setPremises,
  products,
  setProducts,
  stopGap,
  setStopGap,
  damageToRentedProperty,
  setDamageToRentedProperty,
  nonOwnedAuto,
  setNonOwnedAuto,
  employeeBenifits,
  setEmployeeBenifits,
      }}
    >
      {props.children}
    </QuouteFormData.Provider>
  );
};