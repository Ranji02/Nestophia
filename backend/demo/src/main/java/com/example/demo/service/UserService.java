package com.example.demo.service;

// import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.*;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public User insertUser(User s){
    s.setId(userRepository.findMaxId() + 1);
    return userRepository.save(s);
  }

  public List<User> getAllUsers(){
    return (List<User>)userRepository.findAll();
  }

  public User getUserById(User user){
    // if(userRepository.existsById(user.getId())){
      System.out.println("User ID: " + user.getId());
      return userRepository.findById(user.getId()).get();

  }

  // public User getSingleUser(){
  //   return userRepository.getSingleUser();
  // }


  public String existsByEmailandPassword(User user){
    
    if(userRepository.existsByEmail(user.getEmail())){
      if(userRepository.existsByPassword(user.getPassword())){

        List<User> user1 = userRepository.findByEmail(user.getEmail());
        
        System.out.println(user1.toString());
        
        String[] strArray = user1.toString().split(",");

        for(String s: strArray){
          System.out.println(s);
        }

        String[] strArray1 = strArray[1].split(" = ");

        String[] strArray3 = strArray[3].split(" = ");

        // String[] strArray0 = strArray[0].split("[user{user_id=");

        System.out.println("{ \"name\" : \"" + strArray1[1] + "\" , \"mobile\" : \"" + strArray3[1] +"\", \"user_id\" : " + strArray[0].charAt(strArray[0].length()-1) + " }");

        return "{ \"name\" : \"" + strArray1[1] + "\" , \"mobile\" : \"" + strArray3[1] +"\", \"user_id\" : " + strArray[0].charAt(strArray[0].length()-1)  + " }";

                // user1.stream().forEach(u -> {
                //     User userToBeReturn = userRepository.findById(u.getId()).get();
                //     System.out.print("{'" + userToBeReturn.getName() + "' : '" + userToBeReturn.getMobile() + "'}");
                //     // studentToBeUpdate.setName(student.getName());
                //     // studentToBeUpdate.setEmail(student.getEmail());
                //     // studentRepository.save(studentToBeUpdate);
                // });
               
      }
      return "{ \"2\" : \"incorrect password\"}";
    }
    return "{ \"3\" : \"Email Id does not exist ;(\"}" ;
  }



  
  

  // public User updateUser(User s){
  //   Optional<User> optionalUser = userRepository.findById(s.getId());
  //   if (optionalUser.isPresent()){
  //     User UserRecord = optionalUser.get();
  //     UserRecord.setName(StringUtils.defaultIfBlank(s.getFullName(), UserRecord.getFullName()));
  //     UserRecord.setMobile(StringUtils.defaultIfBlank(s.getMobile(), UserRecord.getMobile()));
  //     UserRecord.setEmail(StringUtils.defaultIfBlank(s.getEmail(), UserRecord.getEmail()));
  //     return userRepository.save(UserRecord);
  //   }
  //   else{
  //     return null;
  //   }
  // }

}


// package com.example.demo.service;

// // import org.apache.commons.lang3.StringUtils;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.User;
// import com.example.demo.repository.UserRepository;

// import java.util.*;

// @Service
// public class UserService {

//   @Autowired
//   private UserRepository userRepository;

//   public User insertUser(User s){
//     s.setId(userRepository.findMaxId() + 1);
//     return userRepository.save(s);
//   }

//   public List<User> getAllUsers(){
//     return (List<User>)userRepository.findAll();
//   }


//   public String existsByEmailandPassword(User user){
    
//     if(userRepository.existsByEmail(user.getEmail())){
//       if(userRepository.existsByPassword(user.getPassword())){

//         List<User> user1 = userRepository.findByEmail(user.getEmail());
        
//         System.out.println(user1.toString());
        
//         String[] strArray = user1.toString().split(",");

//         for(String s: strArray){
//           System.out.println(s);
//         }

//         String[] strArray1 = strArray[1].split(" = ");

//         String[] strArray3 = strArray[3].split(" = ");

//         // String[] strArray0 = strArray[0].split("[user{user_id=");

//         System.out.println("{ \"name\" : \"" + strArray1[1] + "\" , \"mobile\" : \"" + strArray3[1] +"\", \"user_id\" : " + strArray[0].charAt(strArray[0].length()-1) + " }");

//         return "{ \"name\" : \"" + strArray1[1] + "\" , \"mobile\" : \"" + strArray3[1] +"\", \"user_id\" : " + strArray[0].charAt(strArray[0].length()-1)  + " }";

//                 // user1.stream().forEach(u -> {
//                 //     User userToBeReturn = userRepository.findById(u.getId()).get();
//                 //     System.out.print("{'" + userToBeReturn.getName() + "' : '" + userToBeReturn.getMobile() + "'}");
//                 //     // studentToBeUpdate.setName(student.getName());
//                 //     // studentToBeUpdate.setEmail(student.getEmail());
//                 //     // studentRepository.save(studentToBeUpdate);
//                 // });
               
        
//       }
//       return "{ \"2\" : \"incorrect password\"}";
//     }
//     return "{ \"3\" : \"Email Id does not exist ;(\"}" ;
//   }



  
  

//   // public User updateUser(User s){
//   //   Optional<User> optionalUser = userRepository.findById(s.getId());
//   //   if (optionalUser.isPresent()){
//   //     User UserRecord = optionalUser.get();
//   //     UserRecord.setName(StringUtils.defaultIfBlank(s.getFullName(), UserRecord.getFullName()));
//   //     UserRecord.setMobile(StringUtils.defaultIfBlank(s.getMobile(), UserRecord.getMobile()));
//   //     UserRecord.setEmail(StringUtils.defaultIfBlank(s.getEmail(), UserRecord.getEmail()));
//   //     return userRepository.save(UserRecord);
//   //   }
//   //   else{
//   //     return null;
//   //   }
//   // }

// }
