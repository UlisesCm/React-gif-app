import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en el componente <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debde de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear la informacion on Summit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar setCategoriaes y limpiar la caja de texto", () => {
    const value = "Hola Mundo";
    //simulacion del inputChange
    wrapper.find("input").simulate("change", { target: { value } }) +
      //Simulacion del submit
      wrapper.find("form").simulate("submit", { preventDefault() {} });
    //setCategproes se dene de haber llamado
    expect(setCategories).toHaveBeenCalled();
    //se llama 1 vez a la funcion
    expect(setCategories).toHaveBeenCalledTimes(1);
    //se llama espera que la llamada tuviera una funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    //el valor del input debe de estar ''
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
