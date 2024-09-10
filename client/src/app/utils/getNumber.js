import { animate } from "framer-motion";
export async function getNumber(count) {
  try {
    const response = await fetch("http://localhost:3001/number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud al servidor.");
    }

    const data = await response.json();
    const randomValue = data.value;

    animate(count, randomValue, { duration: 3 });
  } catch (error) {
    console.error("Hubo un error al solicitar el número:", error);
  }
}
