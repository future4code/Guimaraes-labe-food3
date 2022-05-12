export const goToLogin = (navigate) => {
    navigate("/login");
}

export const goToSignUp = (navigate) =>{
    navigate("/signup");
}

export const goToFourFood = (navigate) =>{
    navigate("/fourfood");
}

export const goToAddress = (navigate) =>{
    navigate("/address")
}

export const goTOEditProfile = (navigate) =>{
    navigate("/editprofile")
}

export const goToProfile = (navigate) =>{
    navigate("/profile")
}

export const goToCart = (navigate, id) =>{
    navigate(`/cart/${id}`)
}