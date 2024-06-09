package com.mlp.lab.dto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto { // 마이페이지 화면에서 받을 데이터
    private Long id;
    private String email;
    private String pwd;
    // private String pwdCheck;
    private String name;
    private String phone;
    private String nickname;
    private String addr;
    private String detailAddr;
    private String location; // 실시간 위치정보 추가

    @Builder.Default
    private List<MultipartFile> files = new ArrayList<>(); // 서버에 저장되는 실제 파일 데이터

    @Builder.Default
    private List<String> uploadFileNames = new ArrayList<>(); // 데이터베이스에 저장될 파일 이름

    //
    public Map<String, Object> getClaims() {
        Map<String, Object> dataMap = new HashMap<>();

        dataMap.put("id", id);
        dataMap.put("email", email);
        dataMap.put("pwd", pwd);
        // dataMap.put("pwdCheck", pwdCheck);
        dataMap.put("name", name);
        dataMap.put("phone", phone);
        dataMap.put("nickname", nickname);
        dataMap.put("addr", addr);
        dataMap.put("detailAddr", detailAddr);
        // dataMap.put("location", location);
        // dataMap.put("social", social);
        // dataMap.put("roleNames", roleNames);

        return dataMap;
    }

}
