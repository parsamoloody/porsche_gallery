using UnityEngine;

public class UnityMessageHandler : MonoBehaviour
{
    public Renderer carRenderer; // Assign the car's renderer in the Inspector

    public void OnMessage(string message)
    {
        string[] parts = message.Split('|');
        if (parts.Length == 2)
        {
            string type = parts[0];
            string payload = parts[1];

            if (type == "CHANGE_COLOR")
            {
                if (ColorUtility.TryParseHtmlString(payload, out Color color))
                {
                    carRenderer.material.color = color;
                }
            }
        }
    }
}
