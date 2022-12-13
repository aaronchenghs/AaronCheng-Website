import React from "react";
import { Fragment } from "react";

import './home.styles.scss'

const bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec elementum velit at magna vulputate sodales ac in orci. Etiam nec aliquet ante. Fusce ut tortor in arcu venenatis fermentum. Nunc tristique sagittis nisi, ut aliquam purus porttitor sit amet. Pellentesque vel orci euismod ipsum tempus feugiat at blandit mauris. Sed nisi nulla, commodo nec volutpat ut, ultricies a velit. Aenean rutrum gravida justo, vitae eleifend quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum suscipit faucibus. In faucibus, metus et aliquam rhoncus, nisl lorem maximus nisl, at vulputate ante est eget nulla. Proin porta sollicitudin nibh, eleifend malesuada nulla egestas nec. Etiam mollis eleifend velit, id scelerisque ipsum dictum vel. Fusce interdum posuere pulvinar. Sed ac magna auctor, ullamcorper metus vitae, gravida nisi. Donec pulvinar ipsum lacus, non aliquam quam tincidunt non. Nulla euismod, nulla vitae venenatis scelerisque, augue mauris lobortis nibh, vel fermentum tellus augue nec tellus Phasellus pulvinar tortor id libero elementum, eu viverra neque convallis. Proin pharetra euismod mattis. Aenean sagittis mattis sem sed iaculis. Nulla ac justo vel magna laoreet suscipit. Maecenas eget nisl vel turpis viverra mattis euismod quis tellus. Donec ante ligula, tempus in mollis quis, commodo sit amet nisl. Ut ut enim ultrices, iaculis leo quis, cursus lectus. Phasellus maximus suscipit fermentum. Nunc at diam vel dolor iaculis tristique a a velit. Ut posuere consequat elit sollicitudin efficitur. Suspendisse vel blandit augue. Cras dignissim sed libero vel pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Duis cursus, tortor ut tempus pellentesque, nunc erat molestie neque, nec hendrerit risus nibh vel massa. Proin sed efficitur ipsum. Donec justo mauris, mollis non dapibus et, bibendum eget urna. Vestibulum sed urna eget dolor sagittis pharetra. Phasellus hendrerit lectus nec nisi condimentum vehicula quis';

const Home = () =>
{
  return(
    <Fragment>
      <div className = 'Home-Page'>

        <div className = 'profile-picture-container'>
          <img className = 'profile-picture' src="https://i.ibb.co/NjStV6f/profile-picture.jpg" alt="profile-picture" width = '370' height = '500'/>
        </div>
        <div className = 'infoCard'>{bio}</div>

      </div>
    </Fragment>
  )
}
export default Home;