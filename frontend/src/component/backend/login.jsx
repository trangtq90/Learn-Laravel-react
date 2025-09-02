import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data);
  return (
    <>
        <Header />

        {/* Main */}
        <main className="my-5">
            <div className="container d-flex justify-content-center">
                <div className="form-login ">
                    <div className="card border-0 shadow">
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="mb-4 text-center">Login</h3>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input 
                                        {...register("email", { 
                                            required: 'Email không được để trống',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Email không đúng định dạng"
                                            }
                                        })}
                                        type="text" 
                                        placeholder="Enter email" 
                                        className={`form-control ${errors.email && 'is-invalid'}`}
                                    />
                                    {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input 
                                        {...register("password", { 
                                            required: 'Password không được để trống',
                                            pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                                            message: "Mật khẩu phải ≥8 ký tự, có chữ hoa, chữ thường và ký tự đặc biệt",
                                            },
                                        })}
                                        type="password" 
                                        placeholder="Enter Password" 
                                        className={`form-control ${errors.password && 'is-invalid'}`}
                                    />
                                    {errors.password && <span className="invalid-feedback">{errors.password.message}</span>}
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </main>

      {/* Footer */}
      <Footer />
      </>
  );
};

export default Login;
