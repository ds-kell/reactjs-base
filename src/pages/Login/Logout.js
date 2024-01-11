import React from 'react';

export default function Logout() {

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '/login';
  }
  return (
    <a href="/login" onClick={logout}>
    Đăng xuất
    </a>
  );
}
