import styles from "~/styles/login.css";
import { useActionData, Form } from "@remix-run/react";
import { z } from "zod";
import { redirect } from "@remix-run/node";
import { useNavigation } from "@remix-run/react"

const schema = z.object({
  email: z.string().email({message: "fornecer email valido"}),
  password: z.string().min(6, {message: "minimo de 6 caracteres"}),
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  if(!schema.safeParse(data).success) {
    return schema.safeParse(data);
  }

  if(schema.safeParse(data).success) {
  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "email": data.email,
      "password": data.password
  })
  }).then(response => response.json())
  .then(json => console.log(json))
  } 


 return redirect("/users")
};

export default function Login() {
  const data = useActionData();
  const navigation = useNavigation();
  
  const isSubmitting = navigation.state === "submitting"
  
  return (
    <>
      <div className="main-content">
        <Form method="post" className="main-content__form">
          <h2 className="main-content__title">Acessar</h2>
          <div className="main-content__label">
            Email
            <input
              id="email"
              className="main-content__input"
              type="text"
              name="email"
            />
           {data?.error?.issues.some((item) => item.path.includes("email")) ? <span className="main-content__error">Insira um email valido</span> : null}
          </div>
          <div className="main-content__label" style={{"marginTop": "25px"}}>
            Senha
            <input
              id="pass"
              className="main-content__input"
              type="password"
              name="password"
            />
            {data?.error?.issues.some((item) => item.path.includes("password") ) ? <span className="main-content__error">A senha deve possuir no minimo 6 letras</span> : null} 
          </div>
          <button disabled={isSubmitting} className="main-content__button">{isSubmitting ? "Aguarde" : "ENTRAR"}</button>
        </Form>
      </div>
    </>
  );
}
