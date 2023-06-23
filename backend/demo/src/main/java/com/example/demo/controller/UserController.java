package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import java.util.List;

import javax.transaction.Transactional;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @PostMapping("/addUser")
  public User addUser(@RequestBody User user){
    return userService.insertUser(user);
  }

  @GetMapping("/getAllUsers")
  public List<User> getAllUsers(){
    return userService.getAllUsers();
  }

  @Transactional
  @PostMapping("/login")
  public String login(@RequestBody User user) {
      return userService.existsByEmailandPassword(user);
  }

  @Transactional
  @PostMapping("/getUserById")
  public User getUserById(@RequestBody User user){
    System.out.println(userService.getUserById(user));
    return userService.getUserById(user);
  }

  // @GetMapping("/getSingleUser")


  // @PostMapping("/updateUser")
  // public User updateUser(@RequestBody User user){
  //   return userService.updateUser(user);
  // }
}


// package com.example.demo.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.example.demo.model.User;
// import com.example.demo.service.UserService;

// import java.util.List;

// import javax.transaction.Transactional;

// @RestController
// public class UserController {

//   @Autowired
//   private UserService userService;

//   @PostMapping("/addUser")
//   public User addUser(@RequestBody User user){
//     return userService.insertUser(user);
//   }

//   @GetMapping("/getAllUsers")
//   public List<User> getAllUsers(){
//     return userService.getAllUsers();
//   }

//   @Transactional
//   @PostMapping("/login")
//   public String login(@RequestBody User user) {
//       return userService.existsByEmailandPassword(user);
//   }


//   // @PostMapping("/updateUser")
//   // public User updateUser(@RequestBody User user){
//   //   return userService.updateUser(user);
//   // }
// }
