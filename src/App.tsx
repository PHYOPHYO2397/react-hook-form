import "./App.css";
import { useForm } from "react-hook-form";
import { validationSchema } from "./utilis/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
interface LoginForm {
  name: string;
  email: string;
  password: string;
}
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };
  return (
    //入力管理{...register("name", {required: "名前が必要です",minLength: { value: 5, message: "5文字以上入力してください。" },})}
    <div className="form-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="名前">名前</label>
        <input type="text" id="name" {...register("name")} />
        <p>{errors.name?.message as React.ReactNode}</p>
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input type="email" id="email" {...register("email")} />
        <p>{errors.email?.message as React.ReactNode}</p>
        <label htmlFor="パスワード">パスワード</label>
        <input type="password" id="password" {...register("password")} />
        <p>{errors.password?.message as React.ReactNode}</p>
        <button type="submit">入力</button>
      </form>
    </div>
  );
}

export default App;
