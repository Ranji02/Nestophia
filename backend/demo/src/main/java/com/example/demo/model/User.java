package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

  @Id
  // @GeneratedValue
  @Basic
  // @Column(name = "user_id", nullable = false)
  private Integer user_id;
  // @Column(name = "full_name", nullable = false)
  private String name;
  // @Column(name = "email", nullable = false)
  private String email;
  // @Column(name = "mobile", nullable = false)

  private String aadhar_card;

  private String mobile;
  // @Column(name = "password", nullable = false)
  private String password;

  public User(){

  }
  public User(String name, String email, String mobile, String aadhar_card, String password){
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.aadhar_card = aadhar_card;
    this.password = password;
  }
  public Integer getId(){
    return user_id;
  }
  public String getName(){
    return name;
  }
  public String getEmail(){
    return email;
  }
  public String getMobile(){
    return mobile;
  }
  public String getAadharCard(){
    return aadhar_card;
  }
  public String getPassword(){
    return password;
  }
  
  public void setId(Integer user_id){
    this.user_id = user_id;
  }
  public void setName(String name){
    this.name = name;
  }
  public void setEmail(String email){
    this.email = email;
  }
  public void setAadharCard(String aadhar_card){
    this.aadhar_card = aadhar_card;
  }
  public void setMobile(String mobile){
    this.mobile = mobile;
  }
  public void setPassword(String password){
    this.password = password;
  }

  @Override
  public String toString() {
  return "user{user_id=" + user_id + ", name = '" + name  + "', email = '" + email + "' , mobile = '" 
  + mobile + "',password = '" + password + "',aadhar_card = '" + aadhar_card  +"'}";
    }
}


// package com.example.demo.model;
// import javax.persistence.*;

// @Entity
// @Table(name = "user")
// public class User {

//   @Id
//   // @GeneratedValue
//   @Basic
//   // @Column(name = "user_id", nullable = false)
//   private Integer user_id;
//   // @Column(name = "full_name", nullable = false)
//   private String name;
//   // @Column(name = "email", nullable = false)
//   private String email;
//   // @Column(name = "mobile", nullable = false)
//   private String mobile;
//   // @Column(name = "password", nullable = false)
//   private String password;

//   public User(){

//   }
//   public User(String name, String email, String mobile, String password){
//     this.name = name;
//     this.email = email;
//     this.mobile = mobile;
//     this.password = password;
//   }
//   public Integer getId(){
//     return user_id;
//   }
//   public String getName(){
//     return name;
//   }
//   public String getEmail(){
//     return email;
//   }
//   public String getMobile(){
//     return mobile;
//   }
//   public String getPassword(){
//     return password;
//   }
  
//   public void setId(Integer user_id){
//     this.user_id = user_id;
//   }
//   public void setName(String name){
//     this.name = name;
//   }
//   public void setEmail(String email){
//     this.email = email;
//   }
//   public void setMobile(String mobile){
//     this.mobile = mobile;
//   }
//   public void setPassword(String password){
//     this.password = password;
//   }

//   @Override
//   public String toString() {
//   return "user{user_id=" + user_id + ", name = '" + name  + "', email = '" + email
//                 + "' , mobile = '" + mobile + "',password = '" + password  +"'}";
//     }
// }
