import React, { useContext, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/Auth";
import { Navigate } from "react-router-dom";


const Login = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm()

    const { login, user } = useContext(AuthContext);

    const navigate = useNavigate();

    // Nếu đã login thì redirect thẳng vào dashboard
    if (user) {
        return <Navigate to = "/admin" />
    }


    const onSubmit = async  (data) => {
        const response = await fetch("http://127.0.0.1:8000/api/authenticate", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.status == false) {
            toast.error(result.message);
        } else {
            const userInfo = {
                id : result.id,
                token : result.token,
            }
            login(userInfo);

            toast.success(result.message);
            navigate('/admin');
        }
    }
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
                                <h3 className="mb-4 text-center">Đăng nhập hệ thống</h3>
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
                                <button type="submit" className="btn btn-primary d-block mx-auto">Đăng nhập</button>
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
