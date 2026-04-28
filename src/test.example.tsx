    // onClick={(e) => e.stopPropagation()}
    // onClick={() => setSelectedVideo(null)}

// const BlogCard = ({ image, author, description, link}: ArticleCardProps) => {
/////////////////
{/* <button
onClick={() => navigate(-1)}
className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold mb-8 sm:mb-10 transition-colors"
>
<HiArrowLeft className="text-lg" />
<span>Back to Blogs</span>
</button> */}

////////////////
// const response = await fetch(endpoint, {
// method: 'POST',
// headers: {
//     'Content-Type': 'application/json',
// },
// body: JSON.stringify({
//     email: appointment.email,
//     name: appointment.name,
//     phone: appointment.phone,
//     service: appointment.service,
//     others: appointment.others
// })
// })
//////////////
// setTimeout(() => setSuccessMessage(""), 5000) //auto-clear success message after 5s
/////////////
//   const handleInputChange = (field: keyof Appointprop, value: string) => {
//     setAppointment({ ...appointment, [field]: value })
//     if (errors[field]) {
//       setErrors({ ...errors, [field]: undefined })
//     }
//   }
//////////////
{/* <input
id="name"
type="text"
placeholder="John Doe"
value={appointment.name}
onChange={(e) => handleInputChange('name', e.target.value)}
className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 transition-all duration-200 outline-none text-sm sm:text-base ${
    errors.name 
    ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
    : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
}`}
required
/> */}
////////////////////////
{/* <div>
    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
    Service Type <span className="text-red-500">***</span>
    </label>
    <select
    id="service"
    value={appointment.service}
    onChange={(e) => setAppointment({ ...appointment, service: e.target.value as 'website' | 'app' | 'agent' })}
    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 bg-white text-sm sm:text-base font-medium"
    >
    <option value="website">Website Development</option>
    <option value="app">Mobile App Development</option>
    <option value="agent">AI Agent Development</option>
    </select>
</div> */}
//////
// const closeMenu = () => setMenuOpen(false);
//////
// const fetchTasks = async () => {
//     const {error, data} = await supabase
//     .from("Tasks")
//     .select("*")
//     .order("created_at", {ascending: true})

//     if(error) {
//         console.error("Error reading task: ", error.message);
//         return;
//     }
//     setTasks(data)
// }
////////
{/* <input type="text" 
placeholder='Task Title'
onChange={(e) => setNewTask((prev) => ({...prev, title: e.target.value }))}
style={{width: "100%", marginBottom: "0.5rem", padding: "0.5rem"}}
/> */}
////////
// onClick={() =>deleteTask(task.id)}
// const [resume, setResume] = useState<File | null>(null);
///////
// onChange={(e) => setResume(e.target.files?.[0] || null)}
///////
{/* <span>🚫</span>
<span>Closed</span> */}
///////
// onClick={() => goToApply(job)}
// disabled={isUnavailable(job)}
///////
// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
///////
    //   await axios.post(
    //     `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
    //     {
    //       username: formData.username,
    //       email: formData.email,
    //       password: formData.password,
    //     } as RegisterPayload
    //   );

    //   setSuccess(true);
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 3000);
////////
{/* <label htmlFor="password" className="sr-only">
Password
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
    <HiLockClosed className="w-5 h-5" />
</div>
<input
    id="password"
    name="password"
    type={showPassword ? "text" : "password"}
    value={formData.password}
    onChange={handleChange}
    className="block w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
    placeholder="Create a password"
    disabled={loading}
/> */}
//////////////
{/* <button
    type="button"
    onClick={() => setShowPassword((s) => !s)}
    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
    aria-label={showPassword ? "Hide password" : "Show password"}
>
    {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
</button> */}
//////////////
// localStorage.setItem("accessToken", res.data.accessToken);
// localStorage.setItem("refreshToken", res.data.refreshToken);
// localStorage.setItem("user", JSON.stringify(res.data.user));
//////////////
    // if (remember) {
    // localStorage.setItem("rememberMe", "1");
    // } else {
    // localStorage.removeItem("rememberMe");
    // }
///////////////
// // Redirect based on role
// if (res.data.user.role === "admin") {
// navigate("/admin/dashboard");
// } else if (res.data.user.role === "manager") {
// navigate("/manager/dashboard");
// } else {
// navigate("/profile");
// }
/////////////
// const handleResendVerification = async () => {
// try {
//     await axios.post(
//     `${import.meta.env.VITE_API_BASE_URL}/api/auth/resend-verification`,
//     { email: formData.username }
//     );
//     alert("Verification email sent! Please check your inbox.");
// } catch (err) {
//     alert("Failed to resend verification email.");
// }
// };
/////////
// id="username"
// name="username"
// type="text"
// value={formData.username}
// onChange={handleChange}
// disabled={loading}
// aria-label="Username or email"
// autoComplete="username"
////////
//     <input
//     type="checkbox"
//     className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//     checked={remember}
//     onChange={() => setRemember((r) => !r)}
//     />
//     Remember me
// </label>
////////
// try {
//     await axios.post<{ success: boolean }>(
//     `${import.meta.env.VITE_API_BASE_URL}/api/auth/forgot-password`,
//     { email }
//     );

//     setSuccess(true);
// } catch (err: unknown) {
//     const error = err as ForgotPasswordError;
//     setError(
//     error.response?.data?.error || "Failed to send reset email. Please try again."
//     );
// } finally {
//     setLoading(false);
// }
// };
////////////////
// onChange={(e) => {
// setEmail(e.target.value);
// setError("");
// }}
////////////////
// const token = searchParams.get("token");
/////////
    // const res = await fetch(`${import.meta.env.VITE_API_UR}/api/profile/me`, {
    //     headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //     },
    // });
//////////////
// const handleLogout = () => {
// localStorage.removeItem("accessToken");
// localStorage.removeItem("refreshToken");
// navigate("/login");
// };
///////
// type User = {    & interface user
//   id?: string;
//   username: string;
//   email: string;
//   role?: string;
// };
