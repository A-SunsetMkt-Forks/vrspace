package org.vrspace.server.dto;

import org.vrspace.server.obj.GroupMember;
import org.vrspace.server.obj.GroupMessage;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Notification sent to client(s) about a group.
 * 
 * @author joe
 *
 */
@Data
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.WRAPPER_OBJECT)
@JsonInclude(Include.NON_EMPTY)
@NoArgsConstructor
public class GroupEvent {
  private GroupMessage message;
  private GroupMember invite;

  public static GroupEvent message(GroupMessage groupMessage) {
    GroupEvent ret = new GroupEvent();
    ret.setMessage(groupMessage);
    return ret;
  }

  public static GroupEvent invite(GroupMember groupMember) {
    GroupEvent ret = new GroupEvent();
    ret.setInvite(groupMember);
    return ret;
  }
}
