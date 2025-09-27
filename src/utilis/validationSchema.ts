import z from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty("名前を入力して下さい")
    .min(5, "５文字以上入力してください"),
  email: z
    .string()
    .nonempty("メールを入力して下さい")
    .email("正しい式で入力してください"),
  password: z
    .string()
    .nonempty("パスワードを入力して下さい")
    .min(6, "6文字以上入力してください"),
});
