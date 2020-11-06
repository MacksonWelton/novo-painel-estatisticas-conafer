import Index from "views/Index.js";
import Profile from "views/Perfil/Perfil.js";
import Login from "views/Login/Login.js";
import Secretarias from "views/Secretarias/Secretarias";
import Afiliados from "views/Afiliados/Afiliados";
import Projetos from "views/Projetos/Projetos";
import Territórios from "views/Territórios/Territórios";
import RecuperarSenha from "views/RecuperarSenha/RecuperarSenha";
import Colaboradores from "views/Colaboradores/Colaboradores";
import Sindicatos from "views/Sindicatos/Sindicatos";

var routes = [
  {
    show: true,
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    show: true,
    path: "/afiliados",
    name: "Afiliados",
    icon: "fas fa-users text-red",
    component: Afiliados,
    layout: "/admin",
  },
  {
    show: true,
    path: "/projetos",
    name: "Projetos",
    icon: "fas fa-project-diagram text-info",
    component: Projetos,
    layout: "/admin",
  },
  {
    show: true,
    path: "/secretarias",
    name: "Secretarias",
    icon: "fas fa-city text-default",
    component: Secretarias,
    layout: "/admin",
  },
  {
    show: true,
    path: "/colaboradores",
    name: "Colaboradores",
    icon: "fas fa-users text-black",
    component: Colaboradores,
    layout: "/admin",
  },
  {
    show: true,
    path: "/sindicatos",
    name: "Sindicatos",
    icon: "fas fa-landmark text-blue",
    component: Sindicatos,
    layout: "/admin",
  },
  {
    show: false,
    path: "/user-profile",
    name: "Meu Perfil",
    icon: "ni ni-single-02 text-black",
    component: Profile,
    layout: "/admin",
  },
  {
    show: true,
    path: "/territórios",
    name: "Territórios",
    icon: "fas fa-map-marked-alt text-green",
    component: Territórios,
    layout: "/admin",
  },
  {
    show: false,
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    show: false,
    path: "/recuperar-senha",
    name: "Recuperar Senha",
    icon: "ni ni-key-25 text-info",
    component: RecuperarSenha,
    layout: "/auth",
  },
];
export default routes;
