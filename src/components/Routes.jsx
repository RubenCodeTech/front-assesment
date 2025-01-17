import { Route, Routes as ReactRoutes } from "react-router-dom";
import Posts from "../pages/PostsPage";
import Header from "./Header";
import PostsForm from "./PostsForm";
import Comment from "./Comment";

export default function Routes() {
    return (
        <ReactRoutes>

            <Route path='/' element={<><Header />
                <div className="App-body">
                    Hello there
                </div>
                <PostsForm />
                <Posts />
            </>} />
            <Route path='*' element={<>
                <Header />
                <div className="App-body">
                    Hello there
                </div>
            </>} />
        </ReactRoutes>
    )
}

